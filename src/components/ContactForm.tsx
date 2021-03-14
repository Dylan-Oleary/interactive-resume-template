import React, { ChangeEvent, FC, FormEvent, useState } from "react";

import { Header, HeaderType } from "../components";
import { IContact, IContactInput } from "../templates";

interface IContactFormProps {
    contact: IContact;
}

interface IFormValues {
    [key: string]: string;
}

const ContactForm: FC<IContactFormProps> = ({ contact }) => {
    const { buttonText = "Submit", title, summary = null, inputs } = contact;

    /**
     * Builds the form state based on the passed configuration
     *
     * @param inputs An array of input template data
     */
    const buildFormValues: (inputs: IContactInput[]) => IFormValues = (
        inputs
    ) => {
        const values: IFormValues = {};

        for (const input of inputs) {
            values[input.label] = "";
        }

        return values;
    };

    /**
     * Handle an input change event
     *
     * @param event The browser change event
     * @param key The form value key used to update the form state
     */
    const handleChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        key: string
    ) => void = (event, key) => {
        const { value } = event.target;

        setFormValues({
            ...formValues,
            [key]: value
        });
    };

    /**
     * Handle the submission of the form
     *
     * @param event The form submission event
     */
    const handleSubmit: (event: FormEvent) => void = (event) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    /**
     * Initialize form state
     */
    const [formValues, setFormValues] = useState<IFormValues>(
        buildFormValues(inputs)
    );

    return (
        <div>
            <Header type={HeaderType.H3}>{title}</Header>
            {summary && summary}
            <form
                action=""
                className="border border-red-500"
                method="POST"
                onSubmit={handleSubmit}
            >
                {inputs.map((input: IContactInput, index: number) => {
                    const { label, name, placeholder = "", type } = input;

                    return (
                        <div key={`form-input-${index}`}>
                            <label htmlFor={name}>{label}</label>
                            {type === "textarea" ? (
                                <textarea
                                    key={`form-input-${index}`}
                                    id={name}
                                    name={name}
                                    onChange={(event) =>
                                        handleChange(event, label)
                                    }
                                    placeholder={placeholder}
                                    value={formValues[label]}
                                />
                            ) : (
                                <input
                                    key={`form-input-${index}`}
                                    id={name}
                                    name={name}
                                    onChange={(event) =>
                                        handleChange(event, label)
                                    }
                                    type={type}
                                    placeholder={placeholder}
                                    value={formValues[label]}
                                />
                            )}
                        </div>
                    );
                })}
                <button onClick={handleSubmit} type="submit">
                    {buttonText}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
export { ContactForm };
