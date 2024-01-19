# Báo Cáo 
> Components
***

1. Button
*  thẻ `button-open`button-open có chức năng mở giao diện khảo trên ứng dụng của người dùng 
thực hiện `title` là giá trị hiển thị ra ngoài .
```html
<button-open title="Khảo sát"></button-open>
```
![image](https://user-images.githubusercontent.com/111570888/193379368-f2ec0509-9bef-4ae6-b9ff-c406d2ef14a4.png)

* thẻ `button-exit-table` có chức năng thay đổi css style.display=none thẻ `table-view or table-view-2`.
```html
<table-view>
       <button-exit-table> </button-exit-table>
</table-view>
```
![image](https://user-images.githubusercontent.com/111570888/193384132-9b74af5e-3b7d-4b11-ab75-f3736a620dfa.png)
* thẻ `stars-rate` chọn điểm đánh giá của người dùng `title` hiển thị loại cho điểm đánh giá, `name` tên lưu giá trị trên database.
```html
 <stars-rate title="Thái độ 1" name="thaido1"></stars-rate>
```
![image](https://user-images.githubusercontent.com/111570888/193386066-f1797f73-5fe8-4cde-a167-e9ac80c5e8c4.png)
* thẻ `button-send` thực việt gửi thông tin đánh giá qua RestApi Post.
```
   <button-send></button-send>  
```
![image](https://user-images.githubusercontent.com/111570888/193386459-091bad1b-c886-42d0-8e03-dd59d85dd07d.png)
* thẻ `button-tables` mở bản chi tiết đánh giá `title` hiển thị tên nút đánh giá ,`text`chú thích nút đánh giá hoặc tên đánh giá  thẻ `div slot="add-table-view-2"` trong thẻ `button-tables` hiện ra bản đánh giá chi tiết.
```html
   <button-tables class="1233" title="Thái Độ"  text="Thái độ của nhân viên ">
                <div slot="add-table-view-2">
                    <table-view-2 name="thaido">
                        <div slot="intable">
                                <button-exit-table></button-exit-table>
                                <lable-table title="thái độ của nhân viên"></lable-table>
                                <textarea-table placeholder="xin vui lòng điền vào chỗ trống" name="ghichu"></textarea-table>
                               
                                <list-rate>
                                    <div slot="list_add">
                                        <stars-rate title="Thái độ 1" name="thaido1"></stars-rate>
                                        <stars-rate title="Thái độ 2" name="thaido2"></stars-rate>
                                        <stars-rate title="Thái độ 3" name="thaido3"></stars-rate>
                                    </div>
                                </list-rate>
                                <button-send></button-send>      
                        </div>
                    </table-view-2>
                </div>
            </button-tables>
```
![image](https://user-images.githubusercontent.com/111570888/193392749-fcec1b70-3d0b-4945-b944-1796f2c4e7b2.png)
* thẻ `button-slide` thực hiển thị thêm thẻ `button-tables` trong danh sách của thẻ `list-button`

![image](https://user-images.githubusercontent.com/111570888/193397915-58f919a4-d165-4dc2-a3b0-491e074f9918.png)

2. Table 
* thẻ `table-view` hiển thị bảng lựa chọn khảo sát 
 ```html
<table-view>
// nội dung bên trong thẻ html 
<table-view>
```
![image](https://user-images.githubusercontent.com/111570888/193395821-da801d73-d53a-403b-b142-21b486d726c5.png)
* thẻ `table-view-2` hiển thị bảng đánh giá chi tiết `name` lưu giá tên chức năng đánh giá trong cơ sở dữ liệu `<div slot="intable">` thêm các nội dung hoặc thẻ bên trong table.
````html
 <table-view-2 name="thaido">
                        <div slot="intable">
                                <button-exit-table></button-exit-table>
                                <lable-table title="thái độ của nhân viên"></lable-table>
                                <textarea-table placeholder="xin vui lòng điền vào chỗ trống" name="ghichu"></textarea-table>
                               
                                <list-rate>
                                    <div slot="list_add">
                                        <stars-rate title="Thái độ 1" name="thaido1"></stars-rate>
                                        <stars-rate title="Thái độ 2" name="thaido2"></stars-rate>
                                        <stars-rate title="Thái độ 3" name="thaido3"></stars-rate>
                                    </div>
                                </list-rate>
                                <button-send></button-send>      
                        </div>
                    </table-view-2>
````
![image](https://user-images.githubusercontent.com/111570888/193395902-c22bdbf8-5cfa-4e2e-811f-e4c12fe5fe3a.png)
* thẻ `sile-change`  khi thêm thẻ này sẽ tự động hiển thị các nút  nhóm nút `button-sile` nằm trong thẻ `list-button` nhằm thực hiện chức năng hiển thị các nút `button-tables` bị ẩn.
```html
 <sile-change></sile-change>
```
![image](https://user-images.githubusercontent.com/111570888/193393820-f05bc583-c1c3-4d7b-a27f-090baef870ef.png)

* thẻ `list-button` chứa một nhóm các thẻ `button-tables`, nếu số lượng thẻ `button-tables` lớn hơn 4, sẽ hiển thị tối đa 4 thẻ `button-tables` và các thẻ `button-tables` còn lại sẽ bị ẩn nếu muốn xuất hiện buộc phải thêm thẻ `<sile-change></sile-change>` trong thẻ `table-view`.
```html
 <list-button> 
     <div slot="list-button"> 
           // các thẻ button-tables
     </div>
</list-button>
```
![image](https://user-images.githubusercontent.com/111570888/193398054-30a236e8-8c2f-4ab9-84d6-f9f7db27670e.png)

* thẻ `list-rate` chứa danh sách các thẻ `stars-rate`. 
```html
                         <list-rate>
                                    <div slot="list_add">
                                        <stars-rate title="Thái độ 1" name="thaido1"></stars-rate>
                                        <stars-rate title="Thái độ 2" name="thaido2"></stars-rate>
                                        <stars-rate title="Thái độ 3" name="thaido3"></stars-rate>
                                    </div>
                                </list-rate>
```
![image](https://user-images.githubusercontent.com/111570888/193398146-04192a1c-5919-4a50-a22b-475a5157ddbf.png)

3. Label 
* thẻ  `lable-table` hiển thị tiêu đề ,ghi chú `title` ghi nội dung trên thẻ 
```html
<lable-table title="thái độ của nhân viên"></lable-table>
```
![image](https://user-images.githubusercontent.com/111570888/193398246-a9ed06fa-45a7-4a13-ae85-26601f9ebd39.png)

 4. Input, Text 
*  thẻ `textarea-table` công cụ người dùng nhập vào từ bàn phím `name` là tên cột được lưu vào cơ sở dữ liệu.
```html
  <textarea-table placeholder="xin vui lòng điền vào chỗ trống" name="ghichu"></textarea-table>
```
![image](https://user-images.githubusercontent.com/111570888/193398343-c9d01bc9-e520-4f99-9738-e36e91177cd2.png)

* thẻ `input-table` công cụ người dùng nhập vào từ bàn phím `name` là tên cột được lưu vào cơ sở dữ liệu.
```html
                 <input_table placeholder="xin vui lòng vào chỗ trống" name="ghichu"></input_table>
```
![image](https://user-images.githubusercontent.com/111570888/193398381-201c9e4a-ed52-4c0d-a3ad-a35676897386.png)

> Restful Api
***
theo mô hình MVC

![Untitled Diagram (1)](https://user-images.githubusercontent.com/111570888/195147107-d0b96e7f-5086-4bfa-91a2-4dfec54a1b53.jpg)

JSONWEBTOKEN

![image](https://user-images.githubusercontent.com/111570888/195152585-08b9ec26-070f-4923-bfc1-08484d61eb0c.png)



