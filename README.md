# 初始化一个新项目
``` bash 
yarn init
```

# 添加依赖包
``` bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

# 将依赖项添加到不同依赖项类别中
``` bash
# 分别添加到 devDependencies、peerDependencies 和 optionalDependencies 类别中：
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

# 移除依赖包
``` bash
yarn remove [package]
```

# 安装项目的全部依赖
``` bash
yarn 
# 或者
yarn install
```