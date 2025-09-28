import { JSX } from 'react';
import { useState } from 'react';

interface FieldModel {
  title: string;
  required: boolean;
  model: any;
  valueField: { name: string; id: string; value: string | null };
  fieldIdField: { name: string; id: string; value: string };
  buttonField: { name: string; id: string; value: string | null }
}

interface AntiForgeryToken {
  name: string;
  value: string;
}

interface FormProps {
  fields: any; // entire JSON structure
}

const mockfields = {
    "htmlPrefix": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa",
    "formSessionId": {
        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.FormSessionId",
        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_FormSessionId",
        "value": "59682475-8ff6-40ab-a35f-9ac744174a4c"
    },
    "formItemId": {
        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.FormItemId",
        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_FormItemId",
        "value": "{12B0371D-0120-43E9-9237-4E0F8B9AEBCF}"
    },
    "pageItemId": {
        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.PageItemId",
        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_PageItemId",
        "value": "0cc77f62-172f-431c-826c-2c1d81f64b95"
    },
    "antiForgeryToken": {
        "name": "__RequestVerificationToken",
        "id": null,
        "value": "sPmf9ILXyyas6_OrYwMSH_BN40Y8a5-3xasJ7TJISUAVUR5TReENaHa3cE14aPq8NXyQFjWKctC4EAvGx-uQUE_DV3Ur5qAmZ545InJCIi41"
    },
    "metadata": {
        "isAjax": true,
        "isTrackingEnabled": true,
        "isRobotDetectionAvailable": true,
        "isRobotDetectionEnabled": true,
        "isTemplate": false,
        "title": "",
        "cssClass": "",
        "cssClassSettings": {
            "manualCssClasses": "",
            "cssClassOptions": [],
            "cssClass": ""
        },
        "thumbnail": "{6590E671-6D5E-449C-A85D-9D4BA36DC56B}",
        "scripts": [
            "jquery-3.4.1.min.js",
            "jquery.validate.min.js",
            "jquery.validate.unobtrusive.min.js",
            "jquery.unobtrusive-ajax.min.js",
            "form.init.js",
            "form.validate.js",
            "form.tracking.js",
            "form.conditions.js"
        ],
        "styles": [],
        "itemId": "12b0371d-0120-43e9-9237-4e0f8b9aebcf",
        "templateId": "{6ABEE1F2-4AB4-47F0-AD8B-BDB36F37F64C}",
        "fieldTypeItemId": "{3A4DF9C0-7C82-4415-90C3-25440257756D}",
        "name": "Contact Us"
    },
    "fields": [
        {
            "fields": [
                {
                    "indexField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.Fields.Index",
                        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_Fields_Index_ae64570a-acc4-419d-b817-84259de00c78",
                        "value": "ae64570a-acc4-419d-b817-84259de00c78"
                    },
                    "fieldIdField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.Fields[ae64570a-acc4-419d-b817-84259de00c78].ItemId",
                        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_Fields_ae64570a-acc4-419d-b817-84259de00c78__ItemId",
                        "value": "ae64570a-acc4-419d-b817-84259de00c78"
                    },
                    "valueField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.Fields[ae64570a-acc4-419d-b817-84259de00c78].Value",
                        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_Fields_ae64570a-acc4-419d-b817-84259de00c78__Value",
                        "value": null
                    },
                    "model": {
                        "minLength": 0,
                        "maxLength": 255,
                        "placeholderText": "name@email.com",
                        "value": "",
                        "validationDataModels": [
                            {
                                "itemId": "{9BAE3E9A-D89F-4F93-9577-68B5E9D44A38}",
                                "name": "Email Validator",
                                "displayName": "Email Validator",
                                "modelType": "Sitecore.ExperienceForms.Mvc.Models.Validation.RegularExpressionValidation,Sitecore.ExperienceForms.Mvc",
                                "message": "{0} contains an invalid email address.",
                                "parameters": "{\"regularExpression\":\"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,17}$\"}"
                            }
                        ],
                        "valueProviderSettings": {
                            "valueProviderItemId": "",
                            "parameters": ""
                        },
                        "isTrackingEnabled": true,
                        "required": true,
                        "allowSave": true,
                        "title": "Your email",
                        "labelCssClass": "",
                        "labelCssClassSettings": {
                            "manualCssClasses": "",
                            "cssClassOptions": [],
                            "cssClass": ""
                        },
                        "conditionSettings": {
                            "fieldKey": "CF00274A4C954DD4999F68E4BE28A6F0",
                            "fieldConditions": []
                        },
                        "cssClassSettings": {
                            "manualCssClasses": "",
                            "cssClassOptions": [],
                            "cssClass": ""
                        },
                        "cssClass": "",
                        "itemId": "ae64570a-acc4-419d-b817-84259de00c78",
                        "name": "Email",
                        "templateId": "{886ADEC1-ABF8-40E1-9926-D9189C4E8E1B}",
                        "fieldTypeItemId": "{04C39CAC-8976-4910-BE0D-879ED3368429}"
                    }
                },
                {
                    "indexField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.Fields.Index",
                        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_Fields_Index_2ad9138b-133e-418e-b7c5-a0144f3cdc21",
                        "value": "2ad9138b-133e-418e-b7c5-a0144f3cdc21"
                    },
                    "fieldIdField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.Fields[2ad9138b-133e-418e-b7c5-a0144f3cdc21].ItemId",
                        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_Fields_2ad9138b-133e-418e-b7c5-a0144f3cdc21__ItemId",
                        "value": "2ad9138b-133e-418e-b7c5-a0144f3cdc21"
                    },
                    "valueField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.Fields[2ad9138b-133e-418e-b7c5-a0144f3cdc21].Value",
                        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_Fields_2ad9138b-133e-418e-b7c5-a0144f3cdc21__Value",
                        "value": null
                    },
                    "model": {
                        "minLength": 0,
                        "maxLength": 255,
                        "placeholderText": "",
                        "value": "",
                        "validationDataModels": [
                            {
                                "itemId": "{83E96D09-11C8-4132-8A8A-76D8DB8208D6}",
                                "name": "String Length Validator",
                                "displayName": "String Length Validator",
                                "modelType": "Sitecore.ExperienceForms.Mvc.Models.Validation.StringLengthValidation,Sitecore.ExperienceForms.Mvc",
                                "message": "{0} must have at least {1} and no more than {2} characters.",
                                "parameters": ""
                            }
                        ],
                        "valueProviderSettings": {
                            "valueProviderItemId": "",
                            "parameters": ""
                        },
                        "isTrackingEnabled": true,
                        "required": true,
                        "allowSave": true,
                        "title": "Subject",
                        "labelCssClass": "",
                        "labelCssClassSettings": {
                            "manualCssClasses": "",
                            "cssClassOptions": [],
                            "cssClass": ""
                        },
                        "conditionSettings": {
                            "fieldKey": "F8330039CDAD4D4AB00307C7666D7987",
                            "fieldConditions": []
                        },
                        "cssClassSettings": {
                            "manualCssClasses": "",
                            "cssClassOptions": [],
                            "cssClass": ""
                        },
                        "cssClass": "",
                        "itemId": "2ad9138b-133e-418e-b7c5-a0144f3cdc21",
                        "name": "Subject",
                        "templateId": "{0908030B-4564-42EA-A6FA-C7A5A2D921A8}",
                        "fieldTypeItemId": "{4EE89EA7-CEFE-4C8E-8532-467EF64591FC}"
                    }
                },
                {
                    "indexField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.Fields.Index",
                        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_Fields_Index_ab0f1cb7-e4dc-4dcd-945a-9b6844b3f928",
                        "value": "ab0f1cb7-e4dc-4dcd-945a-9b6844b3f928"
                    },
                    "fieldIdField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.Fields[ab0f1cb7-e4dc-4dcd-945a-9b6844b3f928].ItemId",
                        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_Fields_ab0f1cb7-e4dc-4dcd-945a-9b6844b3f928__ItemId",
                        "value": "ab0f1cb7-e4dc-4dcd-945a-9b6844b3f928"
                    },
                    "valueField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.Fields[ab0f1cb7-e4dc-4dcd-945a-9b6844b3f928].Value",
                        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_Fields_ab0f1cb7-e4dc-4dcd-945a-9b6844b3f928__Value",
                        "value": null
                    },
                    "model": {
                        "rows": 5,
                        "minLength": 0,
                        "maxLength": 1024,
                        "placeholderText": "",
                        "value": "",
                        "validationDataModels": [
                            {
                                "itemId": "{83E96D09-11C8-4132-8A8A-76D8DB8208D6}",
                                "name": "String Length Validator",
                                "displayName": "String Length Validator",
                                "modelType": "Sitecore.ExperienceForms.Mvc.Models.Validation.StringLengthValidation,Sitecore.ExperienceForms.Mvc",
                                "message": "{0} must have at least {1} and no more than {2} characters.",
                                "parameters": ""
                            }
                        ],
                        "valueProviderSettings": {
                            "valueProviderItemId": "",
                            "parameters": ""
                        },
                        "isTrackingEnabled": true,
                        "required": true,
                        "allowSave": true,
                        "title": "Message",
                        "labelCssClass": "",
                        "labelCssClassSettings": {
                            "manualCssClasses": "",
                            "cssClassOptions": [],
                            "cssClass": ""
                        },
                        "conditionSettings": {
                            "fieldKey": "452C30581E0C4CF281DD8EC91FC96840",
                            "fieldConditions": []
                        },
                        "cssClassSettings": {
                            "manualCssClasses": "",
                            "cssClassOptions": [],
                            "cssClass": ""
                        },
                        "cssClass": "",
                        "itemId": "ab0f1cb7-e4dc-4dcd-945a-9b6844b3f928",
                        "name": "Message",
                        "templateId": "{D8386D04-C1E3-4CD3-9227-9E9F86EF3C88}",
                        "fieldTypeItemId": "{A296A1C1-0DA0-4493-A92E-B8191F43AEC6}"
                    }
                },
                {
                    "navigationButtonsField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.NavigationButtons",
                        "id": null,
                        "value": "a2f0edc1-a1f5-4d1e-9dfa-57e94704edae"
                    },
                    "navigationStepField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.a2f0edc1-a1f5-4d1e-9dfa-57e94704edae",
                        "id": null,
                        "value": "0"
                    },
                    "buttonField": {
                        "name": "fxb.6760cdc7-f14e-4e02-b7be-2491ae675daa.a2f0edc1-a1f5-4d1e-9dfa-57e94704edae",
                        "id": "fxb_6760cdc7-f14e-4e02-b7be-2491ae675daa_a2f0edc1-a1f5-4d1e-9dfa-57e94704edae",
                        "value": "Submit"
                    },
                    "model": {
                        "navigationStep": 0,
                        "submitActions": [
                            {
                                "itemId": "{6D815903-4CFA-4382-BF5B-6B037BC77AF1}",
                                "name": "Save Data",
                                "submitActionId": "{0C61EAB3-A61E-47B8-AE0B-B6EBA0D6EB1B}",
                                "parameters": "",
                                "description": ""
                            },
                            {
                                "itemId": "{86AA6A57-B24F-4A8E-B072-6349C0A2038E}",
                                "name": "Redirect to Page",
                                "submitActionId": "{3F3E2093-9DEA-4199-86CA-44FC69EF624D}",
                                "parameters": "{\"referenceId\":\"{A2C97F89-9751-4822-A751-F5F667B23F96}\"}",
                                "description": "HomeOld"
                            }
                        ],
                        "title": "Contact us",
                        "labelCssClass": "",
                        "labelCssClassSettings": {
                            "manualCssClasses": "",
                            "cssClassOptions": [],
                            "cssClass": ""
                        },
                        "conditionSettings": {
                            "fieldKey": "9448892455104774ACAA77EDB3AA908E",
                            "fieldConditions": []
                        },
                        "cssClassSettings": {
                            "manualCssClasses": "",
                            "cssClassOptions": [],
                            "cssClass": ""
                        },
                        "cssClass": "",
                        "itemId": "a2f0edc1-a1f5-4d1e-9dfa-57e94704edae",
                        "name": "Submit",
                        "templateId": "{94A46D66-B1B8-405D-AAE4-7B5A9CD61C5E}",
                        "fieldTypeItemId": "{7CE25CAB-EF3A-4F73-AB13-D33BDC1E4EE2}"
                    }
                }
            ],
            "model": {
                "conditionSettings": {
                    "fieldKey": "85B1BCB9AC9C40FCB6A8AEF08F3F285F",
                    "fieldConditions": []
                },
                "cssClassSettings": {
                    "manualCssClasses": "",
                    "cssClassOptions": [],
                    "cssClass": ""
                },
                "cssClass": "",
                "itemId": "5b2a8da8-fa28-490f-ad2f-e12b9fb1cc27",
                "name": "Section",
                "templateId": "{8CDDB194-F456-4A75-89B7-346F8F39F95C}",
                "fieldTypeItemId": "{447AA745-6D29-4B65-A5A3-8173AA8AF548}"
            }
        }
    ],
    "contextItemId": "158ce308-ccbf-48cf-9172-6a1f95afdccf"
};

const Form = ({ fields = mockfields}: FormProps): JSX.Element => {
  //console.log('Fields data: ', fields);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const csrfToken: AntiForgeryToken = fields.antiForgeryToken;
  const formSessionId = fields.formSessionId;
  const formItemId = fields.formItemId;
  const pageItemId = fields.pageItemId;

  const fieldGroups = fields.fields?.[0]?.fields || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const body = new URLSearchParams();

      body.append(csrfToken.name, csrfToken.value);
      body.append(formSessionId.name, formSessionId.value);
      body.append(formItemId.name, formItemId.value);
      body.append(pageItemId.name, pageItemId.value);

      // Add all field values
      fieldGroups.forEach((field: FieldModel) => {
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
        <input type="hidden" name={csrfToken.name} value={csrfToken.value} />
        <input type="hidden" name={formSessionId.name} value={formSessionId.value} />
        <input type="hidden" name={formItemId.name} value={formItemId.value} />
        <input type="hidden" name={pageItemId.name} value={pageItemId.value} />

        {/* Form Fields */}
        {fieldGroups.map((field: FieldModel) => {
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
