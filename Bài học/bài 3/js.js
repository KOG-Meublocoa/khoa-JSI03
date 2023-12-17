class Person {
    constructor (name,age,gpa) {
        (this.name = name) , (this.age = age) , (this.gpa = gpa);
    }
}

const Khoa = new Person ("Khoa",17,7.0);
 console.log(Khoa);

class Moto {
    constructor (brand) {
        this.brand = brand ; 
    }
}  

class Model extends Moto {
    constructor(brand , model ){
        super(brand),(this.model = model );
    }
}


// <!-- \*\*\* Lập trình đối tượng - OOP (Oject Oriented Programming)
 
// - Là pp lập trình tập trung vào các đối tượng.Bao gồm : dữ liệu (data) và mã nguồn (code)
// - Dữ liệu (data) , hay còn gọi là thuộc tính ,có tác dụng quy định thông tin về đối tượng 
// - Mã nguốn (method),hay còn được còn là phương thức .Chúng ta có thể thông qua các phương thức này để tương tác với đối phương -->

// <!-- 1. Tính trừu tượng:

// - Các dữ liệu và phương thức có liên quan với nhau được đóng gói thành các lớp để tiện cho việc quản lý và sử dụng.
// - Che giấu một số thông tin và chi tiết cài đặt nội bộ để bên ngoài không thể nhìn thấy

// 2. Tính đóng gói:
// - Tổng quát hóa một cái gì đó lên, không cần chú ý chi tiết bên trong. Nó không màng đến chi tiết bên trong là gì và người ta vẫn hiểu nó mỗi khi nghe về nó

// 3. Tính kế thừa:

// - Nó cho phép xây dựng một lớp mới dựa trên các định nghĩa của lớp đã có
// - Các lớp con khỏi phải định nghĩa lại, ngoài ra có thể mở rộng các thành phần kế thừa và bổ sung thêm các thành phần mới.

// 4. Tính đa hình:
// - Hai hoặc nhiều lớp có những phương thức giống nhau nhưng có thể thực thi theo những cách thức khác nhau
// - VD: lưu trữ thông tin trên cloud -->