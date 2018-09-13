import React from "react";
import { AppRegistry } from "react-native";
import CalculatorWrapper from "./src/CalculatorWrapper"; //import <class> from '<src>';
// import Example from './Example';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Hàm này Thực hiện việc thiết lập state cho component
    // Việc sử dụng super(props) là để có thể sử dụng this.props trong phạm vi hàm constructor này
  }
  componentWillMount() {
    // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất
  }
  componentDidMount() {
    // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất
    // Hàm này rất hữu dụng khi bạn làm việc thêm với Map, bởi vì map chỉ render được
    // khi có node (id) trong DOM
    // Nói tóm lại, hàm này được gọi để thông báo component đã tồn tại trên DOM,
    // từ đó các thao tác trên DOM sẽ có thể thực hiện bình thường đối với component này
  }
  componentWillUnmount() {
    // Hàm này thực hiện một lần duy nhất, khi component sẽ unmount
    // Hàm này hữu dụng khi bạn cần xoá các timer không còn sử dụng
  }
  componentWillReceiveProps(nextProps) {
    // Hàm này thực hiện liên tục mỗi khi props thay đổi
    // (1) Sử dụng để thay đổi trạng thái (state) của component phụ thuộc props
    // (2) Sử dụng các kết quả, khởi tạo biến có tính chất async. Ví dụ: Khởi tạo Google Map Api, đây là quá trình async,
    // do vậy, bạn không thể biết được khi nào khởi tạo xong, thì khi khởi tạo xong có thể truyền xuống component thông qua
    // props, và từ đó bạn có thể khởi tạo các dịch vụ khác.
  }
  shouldComponentUpdate(nextProps, nextState) {
    // Hàm này thực hiện khi state và props thay đổi
    // Hàm này sẽ trả về kết quả true/false, bạn sẽ cần sử dụng đến hàm này để xử lý xem có cần update component không
  }

  componentWillUpdate(nextProps, nextState) {
    // Hàm này thực hiện dựa vào kết quả của hàm trên (shouldComponentUpdate)
    // Nếu hàm trên trả về false, thì React sẽ không gọi hàm này
  }
  componentDidUpdate(prevProps, prevState) {
    // Hàm này thực hiện sau khi component được render lại, từ kết quả của componentWillUpdate
  }
  render() {
    //return <Props />;
    return (
      <CalculatorWrapper />
      /* <Example /> */
    );
  }
}
//AppRegistry.registerComponent('Movies', () => App);

/*User.propTypes = {
  //Khai báo kiểu biến cho props
};
User.defaultProps = {
  //Khai báo giá trị mặc định cho props
}
export default User;*/

/*khi các virtual-DOM tương tác với các DOM thật thì xảy ra các quá trình:

Khởi tạo Component

Lần lượt các hành động sau để khởi tạo component:

Khởi tạo Class (đã thừa kế từ class Component của React)
Khởi tạo giá trị mặc định cho Props (defaultProps)
Khởi tạo giá trị mặc định cho State (trong hàm constuctor)
Gọi hàm componentWillMount()
Gọi hàm render()
Gọi hàm componentDidMount()
Khi State thay đổi
Cập nhật giá trị cho state

Gọi hàm shouldComponentUpdate()
Gọi hàm componentWillUpdate() – với điều kiện hàm trên return true
Gọi hàm render()
Gọi hàm componentDidUpdate()
Khi Props thay đổi
Cập nhật giá trị cho props

Gọi hàm componentWillReceiveProps()
Gọi hàm shouldComponentUpdate()
Gọi hàm componentWillUpdate() – với điều kiện hàm trên return true
Gọi hàm render()
Gọi hàm componetDidUpdate()
Khi Unmount component

Gọi hàm componentWillUnmount()
Nói thêm về phương thức setState() trong reactjs. 
  Trong react bạn chỉ khởi tạo thís.state một lần duy nhất trong hàm constructor. 
  Nếu muốn thay đổi giá trị của nó thì bạn phải dùng method this.setState(). 
  Khi sử dụng setState là chúng ta đã kích hoạt danh sách các phương thức thuộc vòng đời của component. 
  Một điều lưu ý:
    this.setState là hàm async. Nên ngay sau khi setState thì ta truy cập thís.state thì giá trị không thay đổi.
    SetState sẽ luôn luôn dẫn tới việc re-render trừ khi hàm shouldComponentUpdate() trả lại giá trị false.
    để tránh việc re-render lai các component con mà không có sự thay đôi thì ta dùng hàm componentWillReceiveProps(nextProps). 
    nếu nextProps giống với props hiện tại thì sẽ không phải re-render
Nhiều khi ta chỉ muốn copy giá trị của state, 
  nhưng nếu ta truyền thís.setState thì nó sẽ làm thay đổi giả trị, 
  trong trường hợp này ta cần copy nó. Ta có thể dùng Immutability Helpers. 
  Nó sẽ tạo ra một thể hiện của states mình có thể tùy ý sử dụng nó. 
  Sau đó nếu muốn setState thì ta vẫn có thể setState bình thường.*/
