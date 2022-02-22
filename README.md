## Câu hỏi tự luận:

### Sự khác nhau giữa Vitural DOM và Real DOM?

Virtual DOM là một khái niệm được phổ biến bởi React.
Với định dạng cây DOM thuần túy, việc thực hiện tìm kiếm thay đổi ở dom element có thể mất thời gian và phức tạp.

Khi có một sự kiện thay đổi cây dom, React so sánh trạng thái virtual dom ngay trước khi thay đổi và khi thay đổi diễn ra. Bằng cách này, react tìm ra sự thay đổi nằm chính xác ở đâu.

Thuật toán tìm kiếm thay đổi gọi là diffing. Khi tìm ra chỗ thay đổi, react sẽ convert chúng thành mã html dom thuần để thao tác với cây DOM và render trên browser. Cả quá trình tìm kiếm thay đổi → render thay đổi có tên gọi là reconciliation.

Bản chất Virtual DOM thực tế là một object javascript để biểu diễn cây mô hình DOM.

### Tại sao phải có unique key khi render 1 list

Thuật toán diffing sử dụng đệ quy khi chạy trong children element sẽ không hiệu quả với một số edge case.
Ví dụ như thay đổi item đầu tiên của một list item. Thuật toán sẽ không phân biệt được item nào thay đổi mà vẫn chạy hết toàn bộ list. Bằng việc thêm một key riêng cho mỗi phần tử trong list, ta có thêm một cách cho biết phần tử nào trong list thay đổi, từ đó tăng hiệu quả thuật toán.
