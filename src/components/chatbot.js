module.exports = function () {
  return {
    name: "Chatbot",

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
            <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
            <df-messenger
              intent="WELCOME"
              chat-icon="https://codexceleste.com/chatbotsOld/core/images/zaroc1.png"
              chat-title="Kael"
              agent-id="03eb8eef-4f03-4286-aa95-ce979ff4c3a3"
              language-code="es"
            ></df-messenger>
              `,
          },
        ],
      };
    },
  };
};
