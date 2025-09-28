import { JSX, useEffect } from 'react';
import { useState } from 'react';
import { json } from 'stream/consumers';

interface FieldModel {
  title: string;
  required: boolean;
  model: any;
  valueField: { name: string; id: string; value: string | null };
  fieldIdField: { name: string; id: string; value: string };
  buttonField: { name: string; id: string; value: string | null }
}

// A reusable type for Sitecore JSS form fields
interface SitecoreField {
  name: string;
  id: string;
  value: string;
}
interface FormSchema {
  csrfToken?: SitecoreField;
  formSessionId?: SitecoreField;
  formItemId?: SitecoreField;
  pageItemId?: SitecoreField;
  fieldGroups: SitecoreField[];
}

interface AntiForgeryToken {
  name: string;
  value: string;
}

interface FormProps {
  fields: any; // entire JSON structure
}

const Form = ({ fields }: FormProps): JSX.Element => {
  console.log('Fields data: ', fields);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formSchema, setFormSchema] = useState<any>(null);

  // const csrfToken: AntiForgeryToken = fields.antiForgeryToken;
  // const formSessionId = fields.formSessionId;
  // const formItemId = fields.formItemId;
  // const pageItemId = fields.pageItemId;

  //const fieldGroups = fields.fields?.[0]?.fields || [];

  useEffect(() => {
    const ogFieldData = JSON.parse(JSON.stringify(fields));
    setFormSchema({
      csrfToken: ogFieldData.antiForgeryToken,
   formSessionId : ogFieldData.formSessionId,
   formItemId : ogFieldData.formItemId,
   pageItemId : ogFieldData.pageItemId,
   fieldGroups : ogFieldData.fields?.[0]?.fields || [],
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const body = new URLSearchParams();

      body.append(formSchema?.csrfToken?.name, formSchema?.csrfToken?.value);
      body.append(formSchema?.formSessionId?.name, formSchema?.formSessionId?.value);
      body.append(formSchema?.formItemId?.name, formSchema?.formItemId?.value);
      body.append(formSchema?.pageItemId?.name, formSchema?.pageItemId?.value);

      // Add all field values
      formSchema.fieldGroups.forEach((field: FieldModel) => {
        body.append(field.valueField.name, formData[field.valueField.name] || '');
        body.append(field.fieldIdField.name, field.fieldIdField.value);
      });

      const response = await fetch('/forms/api/sitecore/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err: any) {
      console.error(err);
      setError('There was a problem submitting the form.');
    }
  };

  if (submitted) {
    return (
      <section className="bg-white dark:bg-gray-900 py-10 px-4">
        <div className="text-center text-2xl font-semibold text-green-600 dark:text-green-400">
          Thank you! Your message has been submitted.
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900 py-10 px-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        {/* Hidden Inputs */}
        <input type="hidden" name={formSchema?.csrfToken?.name} value={formSchema?.csrfToken?.value} />
        <input type="hidden" name={formSchema?.formSessionId?.name} value={formSchema?.formSessionId?.value} />
        <input type="hidden" name={formSchema?.formItemId?.name} value={formSchema?.formItemId?.value} />
        <input type="hidden" name={formSchema?.pageItemId?.name} value={formSchema?.pageItemId?.value} />

        {/* Form Fields */}
        {formSchema?.fieldGroups.map((field: FieldModel) => {
  const id = field.valueField?.id ?? field.buttonField?.id ?? '';
  const name = field.valueField?.name ?? field.buttonField?.name ?? '';
  const title = field.model?.title || 'Field';
  const placeholder = field.model?.placeholderText || '';
  const required = field.model?.required || false;

  // 🟩 If it's a button field (submit button)
  if (field.buttonField) {
    return (
      <div key={id}>
        <button
          type="submit"
          id={id}
          name={name}
          value={field.buttonField.value || 'Submit'}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {field.buttonField.value || 'Submit'}
        </button>
      </div>
    );
  }

  // 🟦 If it's a text/textarea field
  if (field.valueField) {
    const type = field.model?.rows ? 'textarea' : 'input';

    return (
      <div key={id}>
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {title} {required && '*'}
        </label>

        {type === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            required={required}
            maxLength={field.model?.maxLength || 1024}
            rows={field.model?.rows || 5}
            value={formData[name] || ''} // ✅ Controlled textarea
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        ) : (
          <input
            type="text"
            id={id}
            name={name}
            placeholder={placeholder}
            required={required}
            maxLength={field.model?.maxLength || 255}
            value={formData[name] || ''} // ✅ Controlled input
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        )}
      </div>
    );
  }
  return null;
})}

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </form>
    </section>
  );
};

export default Form;
