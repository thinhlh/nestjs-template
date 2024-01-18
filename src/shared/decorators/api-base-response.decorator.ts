import { Type, applyDecorators } from "@nestjs/common";
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from "@nestjs/swagger";
import { BaseResponse } from "src/shared/kernel/dto/base.response";

export const ApiBaseResponse = <T extends Type<any>>(data?: T | [T]) => {

  const getTypeAndRefOfSchema = (data: T) => {
    const typeName = data.name.toLowerCase();
    const isPrimitiveType = typeName === "string" || typeName === "boolean" || typeName === "number";

    const type = isPrimitiveType ? typeName : "object";
    const ref = isPrimitiveType ? undefined : getSchemaPath(data);

    return { type, ref };
  };

  if (Array.isArray(data)) {
    const { type, ref } = getTypeAndRefOfSchema(data[0]);
    return applyDecorators(
      ApiExtraModels(BaseResponse, data[0]),
      ApiOkResponse({
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
      }),
    );
  } else {
    const { type, ref } = getTypeAndRefOfSchema(data);

    return applyDecorators(
      ApiExtraModels(BaseResponse, data),
      ApiOkResponse({
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
