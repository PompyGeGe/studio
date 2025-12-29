# AI 助学系统 - 项目指南

这是一个使用 Next.js 构建的 AI 助学系统前端项目。

## 如何将项目部署到本地 IntelliJ IDEA

将此在线项目导入到您本地的 IntelliJ IDEA 中进行开发，推荐使用 Git 版本控制工具。这是一个标准的开发流程，可以帮助您更好地管理代码。

### 步骤 1: 在 GitHub (或其他平台) 上创建一个新的代码仓库

1.  访问 [GitHub](https://github.com/) 并登录您的账户。
2.  点击右上角的 "+" 号，选择 "New repository"。
3.  给您的仓库命名 (例如 `ai-learning-assistant`)，可以选择设为私有 (Private)。
4.  **不要** 初始化任何文件，如 `README`, `.gitignore` 或 `license`。我们希望创建一个完全空的仓库。
5.  点击 "Create repository"。
6.  创建后，复制仓库的 HTTPS 或 SSH 地址。它看起来像这样: `https://github.com/YourUsername/ai-learning-assistant.git`

### 步骤 2: 在当前环境中关联远程仓库并推送代码

在这个在线开发环境中，我们可以通过命令行工具来执行 Git 操作。

> **注意**: 您可能需要在这里打开一个终端或命令行界面来执行以下命令。

1.  **初始化本地 Git 仓库**
    ```bash
    git init -b main
    ```

2.  **将所有文件添加到暂存区**
    ```bash
    git add .
    ```

3.  **提交您的第一次代码**
    ```bash
    git commit -m "Initial commit from AI Studio"
    ```

4.  **关联您刚刚在 GitHub 上创建的远程仓库** (请将下面的 URL 替换为您自己的仓库地址)
    ```bash
    git remote add origin https://github.com/YourUsername/ai-learning-assistant.git
    ```

5.  **推送代码到 GitHub**
    ```bash
    git push -u origin main
    ```
    您可能需要输入您的 GitHub 用户名和密码（或个人访问令牌）来完成推送。

### 步骤 3: 在 IntelliJ IDEA 中克隆项目

现在您的代码已经安全地存放在 GitHub 上了，可以随时在本地克隆它。

1.  打开 IntelliJ IDEA。
2.  在欢迎界面选择 "Get from VCS" (从版本控制系统获取)。
3.  将您在步骤 1 中复制的仓库 URL 粘贴到 "URL" 输入框中。
4.  选择您希望在本地存放项目的目录。
5.  点击 "Clone"。

### 步骤 4: 在本地运行项目

项目成功克隆后，IntelliJ IDEA 会自动打开它。

1.  IntelliJ IDEA 可能会提示您安装项目依赖。如果没有，请打开内置的终端 (`View` -> `Tool Windows` -> `Terminal`)。
2.  在终端中运行以下命令来安装所有必需的 npm 包：
    ```bash
    npm install
    ```
3.  安装完成后，运行以下命令来启动本地开发服务器：
    ```bash
    npm run dev
    ```
4.  项目将会在 `http://localhost:9002` 上运行。您可以在浏览器中打开这个地址查看应用。

现在，您已经成功地将项目迁移到了本地的 IntelliJ IDEA 环境中，可以开始您的开发工作了！
