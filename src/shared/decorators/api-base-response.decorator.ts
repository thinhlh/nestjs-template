import { Type, applyDecorators } from "@nestjs/common";
import { ApiExtraModels, ApiResponse, ApiResponseOptions, getSchemaPath } from "@nestjs/swagger";
import { BaseResponse } from "src/shared/kernel/dto/base.response";

type ApiBaseResponseProps<T extends Type<any>> = ApiResponseOptions & {
  format?: T | [T]
}

export const ApiBaseResponse = <T extends Type<any>>({ format, ...props }: ApiBaseResponseProps<T>) => {

  const getTypeAndRefOfSchema = (data: T) => {
    const typeName = data.name.toLowerCase();
    const isPrimitiveType = typeName === "string" || typeName === "boolean" || typeName === "number";

    const type = isPrimitiveType ? typeName : "object";
    const ref = isPrimitiveType ? undefined : getSchemaPath(data);

    return { type, ref };
  };

  if (Array.isArray(format)) {
    const { type, ref } = getTypeAndRefOfSchema(format[0]);
    return applyDecorators(
      ApiExtraModels(BaseResponse, format[0]),
      ApiResponse({
        ...props,
        schema: {
          allOf: [
            { $ref: getSchemaPath(BaseResponse) },
            {
              properties: {
                data: {
                  type: "array",
                  items: {
                    type,
                    $ref: ref
                  }
                }
              },
            },
          ],
        },
      })
    );
  } else {
    const { type, ref } = getTypeAndRefOfSchema(format);

    return applyDecorators(
      ApiExtraModels(BaseResponse, format),
      ApiResponse({
        schema: {
          allOf: [
            { $ref: getSchemaPath(BaseResponse) },
            {
              properties: {
                data: {
                  type,
                  $ref: ref
                }
              },
            },
          ],
        },
      }),
    );
  }
};
