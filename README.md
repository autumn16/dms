## GIỚI THIỆU PHẦN MỀM
Trong thời đại công nghệ thông tin nơi mà mọi thứ đều được số hóa. Việc số hóa giúp cho người sử dụng dễ dàng và thuận lợi hơn trong việc tương tác, tìm kiếm các chức năng mình mong muốn. Chính vì lợi ích to lớn đó nên chúng em quyết định xây dựng 'Phần mềm Quản lý Ký túc xá' (Dormitory Management System _ DMS) để giúp sinh viên ở tại Ký túc xá và Ban quản lý Ký túc xá dễ dàng tương tác - trao đổi với nhau hơn 🎉\
Phần mềm này là thành quả của nhóm CLMCA chúng em, bao gồm các thành viên:
- Bùi Tấn Danh (1811661) 
- Lê Đình Duy (1810861)
- Nguyễn Thanh Hiên (1810913)
- Nguyễn Hữu Hưng (1812496)
- Lưu Minh Trí (1811298)
 
## CÁC LƯU Ý QUAN TRỌNG
1. Phiên bản VueJS đang được sử dụng là **VueJS 3**.
2. Không sử dụng **Bootstrap** mà sử dụng **Built-in Vuetify Component** để tránh conflict.
3. Các file tài nguyên được đặt ở folder **assets**, các layout được đặt ở folder **views**, điều hướng các layout sử dụng vue router trong file **index.js tại folder router**.
4. Trong trường hợp bị lỗi ***vue-cli-service not found*** thì gỡ node_modules ra và cài lại bằng lệnh 
```sh
$ npm install
```
5. Thẻ style của từng layout phải được để tầm vực là **scoped** để tránh conflict.
6. Các site dùng để tham khảo bao gồm [https://vuetifyjs.com/](https://vuetifyjs.com/)  [https://cli.vuejs.org/guide/](https://cli.vuejs.org/guide/)
7. API được dùng để thao tác với database là DMS API do nhóm CLMCA tự phát triển, chi tiết về DMS API nằm ở địa chỉ https://github.com/autumn16/dms-api 

## CHẠY THỬ VÀ GỠ LỖI
1. Chạy thử
```sh
 $ npm run serve
```
2. Build trang web
```sh
 $ npm run build
```
3. Đăng nhập vào tài khoản quản trị viên hệ thống
```sh
   username: admin
   password: admin
```
## CÁC TÍNH NĂNG CỦA HỆ THỐNG

1. **Các chức năng của sinh viên**
 - [x] Đăng ký tài khoản sinh viên mới 
 - [ ] Nhận và xem thông báo từ quản trị viên
 - [ ] Cập nhật thông tin cá nhân
 - [ ] Thanh toán tiền điện nước, tiền ở tại Ký túc xá
 - [ ] Gửi phản hồi cho quản trị viên
 
2. **Các chức năng của quản trị viên**
 
 - [x]  Đăng nhập dưới tài khoản quản trị viên
 - [x] Cập nhật nhiệm vụ hằng ngày của quản trị viên
 - [x] Cập nhật tình hình vệ sinh của Ký túc xá (COVID-19)
 - [x] Cập nhật tình hình an ninh của Ký túc xá
 - [x] Cập nhật sức khỏe của sinh viên 
 - [ ] Cập nhật thông tin của sinh viên
 - [x] Gửi thông báo cho sinh viên
 - [ ] Xử lý phản hồi của sinh viên 
