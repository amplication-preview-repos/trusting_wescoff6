import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
