##小程序开发流程
  1. 全局创建：
      - app.js ---> App() ---> 注册整个应用
      - app.json ---> {pages: []}
  2. 页面创建：
      - index.wxml
      - index.wxss
      - index.js ---> Page() ---> 注册当前页面
      - index.json ---> {}



## 小程序语法特点：
  1. 管理数据
      - 初始化数据： data： {key: value}
      - 页面如何使用数据： {{key}}
      - 修改状态数据： this.setData();
  2. 数据流向：
      - 单向数据流
      - 流向： Model ---> View
  3. 事件分类
      - 事件分为冒泡事件和非冒泡事件：
      - 冒泡事件(bind + 事件名)：当一个组件上的事件被触发后，该事件会向父节点传递。
      - 非冒泡事件(catch + 事件名)：当一个组件上的事件被触发后，该事件不会向父节点传递。
   4. 获取用户登录信息
     1. wx.getUserInfo
        
        - 只能在授权以后使用
        - 如果未授权调用该方法会走失败的回调


     2.  button
        - 标签属性： open-type='getUserInfo',可以弹出授权弹窗
        - 根据bindgetuserinfo对应的回调获取用户信息
        
    5. 路由条状
      1. wx.navigateTo() // 保留当前页面，可以回退
      2. wx.redirectTo() // 不能回退
    6. 如何向事件对象event传参
      1. 语法： data-key = value;
      2. 获取： 事件对应回调中 ---> event.currentTart ||event.target.dataset.key
    7. 如何通过路由传参
      1. 语法： path?key=value
      2. 获取： 目标页面的onLoad生命周期函数中，声明形参，通过实参获取： options.key = value;
    8. 数据存储
      1. 同步存储: wx.setStorageSync() wx.getStorageSync()
      2. 异步存储: wx.setStorage()  wx.getStorage();
      3. 存储数据注意点： 单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB
## 事件委托
  1. 什么是事件委托
    1. 将子元素的事件委托(绑定)给父元素
  2. 事件委托的好处
    1. 减少绑定的次数
    2. 提高性能
    3. 新添加的子元素也能享用之前绑定的事件
  3. 事件委托的原理
    1. 冒泡
  4. 触发事件的是谁
    1. 子元素
  5. 如何找到触发事件的子元素
    1. event.target



## 音乐播放
  1. 页面初始化音乐未播放
  2. 点击页面音乐的按钮： 切换播放和停止
  3. 当某一个页面音乐在播放的时候再次进入该页面能继续显示播放状态
  4. 背景音乐播放器只能控制音乐的播放和暂停，要想停止就关闭背景音乐播放器
  5. 将哪个页面的音乐在播放存储公共区域App的实例对象的globalData中，
  6. 通过getApp()获取App的实例对象