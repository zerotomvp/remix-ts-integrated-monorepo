import type { V2_MetaFunction } from "@remix-run/node";
import { TextField } from "@shared/ui";
import {
  GenericObject,
  ValidatedForm,
  ValidationResult,
} from "remix-validated-form";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <ValidatedForm
      validator={{
        validate: function (
          unvalidatedData: GenericObject
        ): Promise<ValidationResult<unknown>> {
          throw new Error("Function not implemented.");
        },
        validateField: undefined,
      }}
    >
      <TextField />
    </ValidatedForm>
  );
}
