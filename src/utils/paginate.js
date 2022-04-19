import _ from "lodash";

export function paginate(items, pageNummber, pageSize) {
  const startIndex = (pageNummber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
