import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import UserList from './src/components/UserList';
import UserDetail from './src/components/UserDetail';
import { ThemeProvider, Button } from 'react-native-elements';


const primary = "#39ace7"
const theme = {
  colors: {
    primary: '#3498db',  // 主题中的主要颜色
  },
  Button: {
    titleStyle: {
      color: 'white',  // 全局按钮文本颜色
      borderRadius: 10
    },
    buttonStyle: {
      backgroundColor: primary,  // 全局按钮背景颜色
      borderRadius: 10,  // 全局按钮圆角
      backgroundColor: "red",  // 全局按钮背景颜色
    },
    blueButtonStyle: {
      backgroundColor: "yellow",  // 全局按钮背景颜色
      backgroundColor: primary,  // 全局按钮背景颜色
      borderRadius: 5,  // 全局按钮圆角
    },
    whiteButtonStyle: {
      backgroundColor: "white",  // 全局按钮背景颜色
      borderRadius: 5,  // 全局按钮圆角
      borderWidth: 1, // 调整边框宽度
    },
    containerStyle: {
      margin: 10,  // 全局按钮外边距
    },
  },
  Card: {
    containerStyle: {
      borderRadius: 10,  // 全局卡片圆角
      backgroundColor: 'white',  // 全局卡片背景颜色
    },
  },
  // 其他全局主题设置
};

export default function App() {
  return (
    <Provider style={styles.container} store={store}>
      <ThemeProvider theme={theme}>
        <View style={styles.content}>
          <UserDetail />
        </View>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    height: 200,
  },
});
