import { Popconfirm, Tooltip } from "antd";
import EditIcon from "assets/svg/edit.js";
import RemoveIcon from "assets/svg/remove.js";
import React, { Fragment } from "react";
import numeral from 'numeral'

const Column = ({ t, formatDate, listCategory, handleEdit, handleDelete }) => {
   return [
      {
         title: t("STT"),
         name: "id",
         tableItem: {
            align: 'center',
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         // formItem: {
         //    rules: [{ type: "required" }],
         // },
      },
      {
         title: t("Tên Sản Phẩm"),
         name: "name",
         tableItem: {
            filter: { type: "search" },
            sorter: true,
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         formItem: {
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Hình ảnh"),
         name: "imageUrl",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text && <div style={{ width: '100%', margin: 'auto' }}>
               <img src={text} alt="anh" style={{ height: '40px', width: '50px', borderRadius: '10px', overflow: 'hidden' }} />
            </div>
         },
         formItem: {
            // type: "upload",
         },
      },
      {
         title: t("Attachment"),
         name: "attachment",
         formItem: {
            type: "upload",
         },
      },
      {
         title: t("Phân loại"),
         name: "category",
         tableItem: {
            filter: { type: "search" },
            sorter: true,
            onCell: () => ({ style: { paddingTop: '0.25rem', paddingBottom: 0 } }),
         },
         formItem: {
            // condition: (data, form) => !!data && data.id,
            type: "select",
            rules: [{ type: "required" }],
            list: listCategory,
         },
      },
      {
         title: t("Số lượng tồn"),
         name: "countInStock",
         tableItem: {
            align: "center",
            onCell: () => ({ style: { paddingTop: '0.25rem', paddingBottom: 0 } }),
         },
         formItem: {
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Giá"),
         name: "price",
         tableItem: {
            render: (price) => price && <span> {numeral(price).format(0, 0) || ''} đ</span>
         },
         formItem: {
            rules: [{ type: "required" },],
            mask: {
               'alias': 'numeric', 'groupSeparator': ',', 'digitsOptional': false, 'prefix': '$ ',
               'placeholder': '0',
            }
         },
      },
      {
         title: t("Đánh giá"),
         name: "rating",
         tableItem: {
            align: 'center',
            render: (text) => text,
         },
         // formItem: {
         //    condition: (data) => !!data && data.id,
         //    type: "switch",
         // },
      },
      {
         title: t("Hoạt động"),
         tableItem: {
            width: 180,
            align: "center",
            onCell: () => ({ style: { paddingTop: '0.25rem', paddingBottom: 0 } }),
            render: (text, data) => (<Fragment>
               <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                     className="embed border border-gray-300 text-xs rounded-lg mr-2"
                     onClick={() => handleEdit(data)}
                  >
                     <EditIcon />
                  </button>
               </Tooltip>
               <Tooltip title={t("routes.admin.Layout.Delete")}>
                  <Popconfirm
                     placement="left"
                     title={t("components.datatable.areYouSureWant")}
                     icon={<i className="las la-question-circle text-2xl text-yellow-500 absolute -top-0.5 -left-1" />}
                     onConfirm={() => handleDelete(data.id)}
                     okText={t("components.datatable.ok")}
                     cancelText={t("components.datatable.cancel")}
                  >
                     <button className="embed border border-gray-300 text-xs rounded-lg mr-2">
                        <RemoveIcon />
                     </button>
                  </Popconfirm>
               </Tooltip>
            </Fragment>),
         },
      },
   ];
};
export default Column;
