
import { Message } from "components";


export const ProductService = {
   nameLink: "Product",
   get: async (params) => {
      try {
         // const { data } = await axios.get(routerLinks(UserService.nameLink, "api"), {
         //   params,
         // });
         // return data;
         return {
            data: [
               {
                  id:1,
                  imageUrl: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/5/842142/Me-Man-Voi-5-Giong-M.jpg',
                  colors: ["#000", "gray"],
                  size: ["S", "M", "L", "XL"],
                  name: "Áo Polo BOUTON With Zipper 1" ,
                  category: "Áo Polo",
                  price: 280000,
                  countInStock: 10,
                  rating: 4.5,
                  numReviews: 10,
                  description: " Pique Jogger BOUTON With Zipper // dòng quần jogger vải pique là mẫu mới lên kệ trong năm nay của BOUTON.Form slim, chất vải pique là dòng bán chạy nhất luôn ",
                  newArrivals: true
               },
               {
                  id:2,
                  imageUrl: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/5/842142/Me-Man-Voi-5-Giong-M.jpg',
                  colors: ["#000", "gray"],
                  size: ["S", "M", "L", "XL"],
                  name: "Quần Jogger BOUTON With Zipper 2 ",
                  category: "Quần Jogger ",
                  price: 280000,
                  countInStock: 10,
                  rating: 4.5,
                  numReviews: 10,
                  description: " Pique Jogger BOUTON With Zipper // dòng quần jogger vải pique là mẫu mới lên kệ trong năm nay của BOUTON.Form slim, chất vải pique là dòng bán chạy nhất luôn ",
                  newArrivals: true
               },
               {
                  id:3,
                  imageUrl: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/5/842142/Me-Man-Voi-5-Giong-M.jpg',
                  colors: ["#000", "gray"],
                  size: ["S", "M", "L", "XL"],
                  name: "Áo Polo BOUTON With Zipper 3",
                  category: "Áo Polo",
                  price: 280000,
                  countInStock: 10,
                  rating: 4.4,
                  numReviews: 10,
                  description: " Pique Jogger BOUTON With Zipper // dòng quần jogger vải pique là mẫu mới lên kệ trong năm nay của BOUTON.Form slim, chất vải pique là dòng bán chạy nhất luôn ",
                  newArrivals: true
               },
               {
                  id:4,
                  imageUrl: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/5/842142/Me-Man-Voi-5-Giong-M.jpg',
                  colors: ["#000", "gray"],
                  size: ["S", "M", "L", "XL"],
                  name: "Áo Thun BOUTON With Zipper 4",
                  category: "Áo Thun",
                  price: 280000,
                  countInStock: 10,
                  rating: 4.1,
                  numReviews: 10,
                  description: " Pique Jogger BOUTON With Zipper // dòng quần jogger vải pique là mẫu mới lên kệ trong năm nay của BOUTON.Form slim, chất vải pique là dòng bán chạy nhất luôn ",
                  newArrivals: true
               },
               {
                  id:5,
                  imageUrl: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/5/842142/Me-Man-Voi-5-Giong-M.jpg',
                  colors: ["#000", "gray"],
                  size: ["S", "M", "L", "XL"],
                  name: "Áo Thun BOUTON With Zipper 5",
                  category: "Áo Thun",
                  price: 280000,
                  countInStock: 10,
                  rating: 4.2,
                  numReviews: 10,
                  description: " Pique Jogger BOUTON With Zipper // dòng quần jogger vải pique là mẫu mới lên kệ trong năm nay của BOUTON.Form slim, chất vải pique là dòng bán chạy nhất luôn ",
                  newArrivals: true
               },
               {
                  id: 6,
                  imageUrl: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/5/842142/Me-Man-Voi-5-Giong-M.jpg',
                  colors: ["#000", "gray"],
                  size: ["S", "M", "L", "XL"],
                  name: "Quần Jogger BOUTON With Zipper 6",
                  category: "Quần Jogger",
                  price: 280000,
                  countInStock: 10,
                  rating: 4.5,
                  numReviews: 10,
                  description: " Pique Jogger BOUTON With Zipper // dòng quần jogger vải pique là mẫu mới lên kệ trong năm nay của BOUTON.Form slim, chất vải pique là dòng bán chạy nhất luôn ",
                  newArrivals: true
               },
               {
                  id: 7,
                  imageUrl: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/5/842142/Me-Man-Voi-5-Giong-M.jpg',
                  colors: ["#000", "gray"],
                  size: ["S", "M", "L", "XL"],
                  name: "Quần Jogger BOUTON With Zipper 7",
                  category: "Quần Jogger",
                  price: 280000,
                  countInStock: 10,
                  rating: 4.3,
                  numReviews: 10,
                  description: " Pique Jogger BOUTON With Zipper // dòng quần jogger vải pique là mẫu mới lên kệ trong năm nay của BOUTON.Form slim, chất vải pique là dòng bán chạy nhất luôn ",
                  newArrivals: true
               },
               {
                  id: 8,
                  imageUrl: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/5/842142/Me-Man-Voi-5-Giong-M.jpg',
                  colors: ["#000", "gray"],
                  size: ["S", "M", "L", "XL"],
                  name: "Áo Thun BOUTON With Zipper 8",
                  category: "Áo Thun",
                  price: 280000,
                  countInStock: 10,
                  rating: 5.0,
                  numReviews: 10,
                  description: " Pique Jogger BOUTON With Zipper // dòng quần jogger vải pique là mẫu mới lên kệ trong năm nay của BOUTON.Form slim, chất vải pique là dòng bán chạy nhất luôn ",
                  newArrivals: true
               },
               {
                  id: 9,
                  imageUrl: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/5/842142/Me-Man-Voi-5-Giong-M.jpg',
                  colors: ["#000", "gray"],
                  size: ["S", "M", "L", "XL"],
                  name: "Quần Jean BOUTON With Zipper 9",
                  category: "Quần Jean",
                  price: 280000,
                  countInStock: 10,
                  rating: 4.6,
                  numReviews: 10,
                  description: " Pique Jogger BOUTON With Zipper // dòng quần jogger vải pique là mẫu mới lên kệ trong năm nay của BOUTON.Form slim, chất vải pique là dòng bán chạy nhất luôn ",
                  newArrivals: true
               },
               {
                  id: 5,
                  imageUrl: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/5/842142/Me-Man-Voi-5-Giong-M.jpg',
                  colors: ["#000", "gray"],
                  size: ["S", "M", "L", "XL"],
                  name: "Quần Jogger BOUTON With Zipper 10",
                  category: "Quần Jogger",
                  price: 280000,
                  countInStock: 10,
                  rating: 4.7,
                  numReviews: 10,
                  description: " Pique Jogger BOUTON With Zipper // dòng quần jogger vải pique là mẫu mới lên kệ trong năm nay của BOUTON.Form slim, chất vải pique là dòng bán chạy nhất luôn ",
                  newArrivals: true
               },
            ],
            count: 20,
         };
      // eslint-disable-next-line no-unreachable
      } catch (e) {
         if (e.response.data.message) Message.error(e.response.data.message);
         return false;
      }
   },
   getById: async (id) => {
      try {
         // const { data } = await axios.get(
         //   `${routerLinks(UserService.nameLink, "api")}/${id}`
         // );
         // data.data.mtRoleCode = data.data.userRole?.mtRole?.code;
         // data.data.wardId = data.data.ward?.id;
         // data.data.departmentId = data.data.department?.id;
         // return data;
         return { data: { id } };
      } catch (e) {
         if (e.response.data.message) Message.error(e.response.data.message);
         return false;
      }
   },
   post: async (values) => {
      console.log(values);
      try {
         // const { data } = await axios.post(
         //   routerLinks(UserService.nameLink, "api"),
         //   values
         // );
         // if (data.message) Message.success(data.message);
         // return data;
         return values;
      } catch (e) {
         if (e.response.data.message) Message.error(e.response.data.message);
         return false;
      }
   },
   put: async (values, id) => {
      try {
         // const { data } = await axios.put(
         //   `${routerLinks(UserService.nameLink, "api")}/${id}`,
         //   values
         // );
         // if (data.message) Message.success(data.message);
         // return data;
         return values;
      } catch (e) {
         if (e.response.data.message) Message.error(e.response.data.message);
         return false;
      }
   },
   delete: async (id) => {
      try {
         // const { data } = await axios.delete(
         //   `${routerLinks(UserService.nameLink, "api")}/${id}`
         // );
         // if (data.message) Message.success(data.message);
         // return data;
         return { id };
      } catch (e) {
         if (e.response.data.message) Message.error(e.response.data.message);
         return false;
      }
   },
};
