import { CustomAvatar, SelectOptionWithAvatar } from "@/components";
import {
  businessTypeOptions,
  companySizeOptions,
  industryOptions,
} from "@/constants";
import { UPDATE_COMPANY_MUTATION } from "@/graphql/mutations";
import { USERS_SELECT_QUERY } from "@/graphql/queries";
import { UsersSelectQuery } from "@/graphql/types";
import { getNameInitials } from "@/utilities";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { GetFieldsFromList } from "@refinedev/nestjs-query";
import { Col, Form, Input, InputNumber, Row, Select } from "antd";

export const EditPage = () => {
  const { saveButtonProps, formProps, formLoading, queryResult } = useForm({
    redirect: false,
    meta: {
      gqlMutation: UPDATE_COMPANY_MUTATION,
    },
  });

  const { name, avatarUrl } = queryResult?.data?.data || {};

  const { selectProps, queryResult: queryResultUsers } = useSelect<
    GetFieldsFromList<UsersSelectQuery>
  >({
    resource: "users",
    optionLabel: "name",
    pagination: {
      mode: "off",
    },
    meta: {
      gqlQuery: USERS_SELECT_QUERY,
    },
  });

  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col sm={24} xl={12}>
          <Edit
            breadcrumb={false}
            isLoading={formLoading}
            saveButtonProps={saveButtonProps}
          >
            <Form {...formProps} layout="vertical">
              <CustomAvatar
                shape="square"
                src={avatarUrl}
                name={getNameInitials(name || "")}
                style={{ marginBottom: "24px", width: 96, height: 96 }}
              />

              <Form.Item
                label="Sales owner"
                name="salesOwnerId"
                initialValue={formProps?.initialValues?.salesOwner?.id}
              >
                <Select
                  placeholder="Please select a sales owner"
                  {...selectProps}
                  options={
                    queryResultUsers.data?.data.map((user) => ({
                      value: user.id,
                      label: (
                        <SelectOptionWithAvatar
                          name={user.name}
                          avatarUrl={user.avatarUrl ?? undefined}
                        />
                      ),
                    })) ?? []
                  }
                />
              </Form.Item>

              <Form.Item label="Company size">
                <Select options={companySizeOptions} />
              </Form.Item>

              <Form.Item label="Total revenue">
                <InputNumber
                  autoFocus
                  addonBefore={"$"}
                  min={0}
                  placeholder="0.00"
                />
              </Form.Item>

              <Form.Item label="Industry">
                <Select options={industryOptions} />
              </Form.Item>

              <Form.Item label="Business type">
                <Select options={businessTypeOptions} />
              </Form.Item>

              <Form.Item label="Country" name="country">
                <Input placeholder="Country" />
              </Form.Item>

              <Form.Item label="Website" name="website">
                <Input placeholder="Website" />
              </Form.Item>
            </Form>
          </Edit>
        </Col>
      </Row>
    </div>
  );
};
