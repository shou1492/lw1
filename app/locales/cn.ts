import { SubmitKey } from "../store/config";

const cn = {
  WIP: "已支持联网对话，GPT4及绘画正在筹划中……",
  Error: {
    Unauthorized:
      "ChatGPT Puls免费免费！！\n 在[设置](/#/settings)页填入你的授权码\n由于成本原因亦可能网站遭泄漏被人跑数据。故添加授权码，自由打赏/红包5-10任意金额免费无次数限制，无限使用（💥免费使用全部功能💥）！！\n\n\n-🧧添加V：[获取您的邀请码](https://key.dk666.cc/64.jpeg)",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 条对话`,
  },
  Chat: {
    SubTitle: (count: number) => `与 ChatGPT 的 ${count} 条对话`,
    Actions: {
      ChatList: "查看消息列表",
      CompressedHistory: "查看压缩后的历史 Prompt",
      Export: "导出聊天记录",
      Copy: "复制",
      Stop: "停止",
      Retry: "重试",
      Delete: "删除",
    },
    Rename: "重命名对话",
    Typing: "正在输入…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} 发送`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter 换行";
      }
      return inputHints + "，/ 触发补全";
    },
    Send: "发送",
    Config: {
      Reset: "重置默认",
      SaveAs: "另存为应用",
    },
  },
  Export: {
    Title: "导出聊天记录为 Markdown",
    Copy: "全部复制",
    Download: "下载文件",
    MessageFromYou: "来自你的消息",
    MessageFromChatGPT: "来自 ChatGPT Plus的消息",
  },
  Memory: {
    Title: "历史摘要",
    EmptyContent: "对话内容过短，无需总结",
    Send: "自动压缩聊天记录并作为上下文发送",
    Copy: "复制摘要",
    Reset: "重置对话",
    ResetConfirm: "重置后将清空当前对话记录以及历史摘要，确认重置？",
  },
  Home: {
    NewChat: "新的聊天",
    DeleteChat: "确认删除选中的对话？",
    DeleteToast: "已删除会话",
    Revert: "撤销",
  },
  Settings: {
    Title: "设置",
    SubTitle: "设置选项",
    Actions: {
      ClearAll: "清除所有数据",
      ResetAll: "重置所有选项",
      Close: "关闭",
      ConfirmResetAll: "确认重置所有配置？",
      ConfirmClearAll: "确认清除所有数据？",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "所有语言",
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
        it: "Italiano",
        tr: "Türkçe",
        jp: "日本語",
        de: "Deutsch",
        vi: "Vietnamese",
        ru: "Русский",
        cs: "Čeština",
      },
    },
    Avatar: "头像",
    FontSize: {
      Title: "字体大小",
      SubTitle: "聊天内容的字体大小",
    },

    Update: {
      Version: (x: string) => `添加作者微信`,
      IsLatest: "已是最新版本",
      CheckUpdate: "检查更新",
      IsChecking: "正在检查...",
      FoundUpdate: (x: string) => `反馈更多功能或问题`,
      GoToUpdate: "点击添加",
    },
    SendKey: "发送键",
    Theme: "主题",
    TightBorder: "无边框模式",
    SendPreviewBubble: {
      Title: "预览气泡",
      SubTitle: "在预览气泡中预览 Markdown 内容",
    },
    Mask: {
      Title: "应用启动页",
      SubTitle: "新建聊天时，展示应用启动页",
    },
    Prompt: {
      Disable: {
        Title: "禁用提示词自动补全",
        SubTitle: "在输入框开头输入 / 即可触发自动补全",
      },
      List: "自定义提示词列表",
      ListCount: (builtin: number, custom: number) =>
        `内置 ${builtin} 条，用户定义 ${custom} 条`,
      Edit: "编辑",
      Modal: {
        Title: "提示词列表",
        Add: "新建",
        Search: "搜索提示词",
      },
      EditModal: {
        Title: "编辑提示词",
      },
    },
    HistoryCount: {
      Title: "附带历史消息数",
      SubTitle: "每次请求携带的历史消息数",
    },
    CompressThreshold: {
      Title: "历史消息长度压缩阈值",
      SubTitle: "当未压缩的历史消息超过该值时，将进行压缩",
    },
    Token: {
      Title: "API Key",
      SubTitle: "使用自己的 Key 可绕过密码访问限制",
      Placeholder: "OpenAI API Key",
    },

    Usage: {
      Title: "站点余额",
      SubTitle(used: any, total: any) {
        return `本月已使用 $${used}，订阅总额 $${total}`;
      },
      IsChecking: "正在检查…",
      Check: "重新检查",
      NoAccess: "请输入授权码码可以看到，余额不足时请通知作者",
    },
    AccessCode: {
      Title: "🔒授权码🔒",
      SubTitle: "由于成本原因已开启授权访问",
      Placeholder: "请输入授权码",
    },
    Model: "模型（勿改）",
    Temperature: {
      Title: "随机性",
      SubTitle: "值越大，回复越随机",
    },
    MaxTokens: {
      Title: "单次回复限制",
      SubTitle: "单次交互所用的最高次数",
    },
    PresencePenlty: {
      Title: "话题新鲜度",
      SubTitle: "值越大，越有可能扩展到新话题，太高会导致乱码",
    },
  },
  Store: {
    DefaultTopic: "新的聊天",
    BotHello: "尊贵的内部人员,您好！有什么可以帮助你的吗？\n \n \n🔥🔥🔥联网问答:点击下方WIFI按钮即为开启状态。\n❗❗❗注意：联网开启后每一次提问都是新的对话，不支持上下文联想,不使用时请手动关闭！\n授权码可授权三台设备使用,超过后检测到异常授权既判定授权码立即失效!请知悉",
    Error: "出错了，稍后重试吧",
    Prompt: {
      History: (content: string) =>
        "这是 ai 和用户的历史聊天总结作为前情提要：" + content,
      Topic:
        "使用四到五个字直接返回这句话的简要主题，不要解释、不要标点、不要语气词、不要多余文本，如果没有主题，请直接返回“闲聊”",
      Summarize:
        "简要总结一下你和用户的对话，用作后续的上下文提示 prompt，控制在 200 字以内",
    },
  },
  Copy: {
    Success: "已写入剪切板",
    Failed: "复制失败，请赋予剪切板权限",
  },
  Context: {
    Toast: (x: any) => `已设置 ${x} 条前置上下文`,
    Edit: "当前应用设置",
    Add: "新增智能应用",
  },
  Plugin: {
    Name: "最新公告",
  },
  Mask: {
    Name: "应用",
    Page: {
      Title: "智能应用",
      SubTitle: (count: number) => `${count} 个预设角色定义`,
      Search: "搜索GPT应用",
      Create: "新建",
    },
    Item: {
      Info: (count: number) => `包含 ${count} 条预设对话`,
      Chat: "打开",
      View: "查看",
      Edit: "编辑",
      Delete: "删除",
      DeleteConfirm: "确认删除？",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `编辑预设应用 ${readonly ? "（只读）" : ""}`,
      Download: "下载应用",
      Clone: "克隆应用",
    },
    Config: {
      Avatar: "应用头像",
      Name: "应用名称",
    },
  },
  NewChat: {
    Return: "返回",
    Skip: "直接开始",
    NotShow: "不再展示",
    ConfirmNoShow: "确认禁用？禁用后可以随时在设置中重新启用。",
    Title: "海量的ChatGPT应用",
    SubTitle: "或在几秒钟创建属于自己的应用",
    More: "立即挑选",
  },

  UI: {
    Confirm: "确认",
    Cancel: "取消",
    Close: "关闭",
    Create: "新建",
    Edit: "编辑",
  },
};

export type LocaleType = typeof cn;

export default cn;
