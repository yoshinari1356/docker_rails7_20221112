import consumer from "./consumer"

const chatChannel = consumer.subscriptions.create({ channel: "ChatChannel", room: "common" }, {
  received(data) {
    console.log("ChatChannel", "received", data)

    this.appendLine(data)
  },

  appendLine(data) {
    console.log("ChatChannel", "appendLine", data)
    const html = this.createLine(data)
    const element = document.querySelector("[data-chat-room='common']")
    element.insertAdjacentHTML("beforeend", html)
  },

  createLine(data) {
    console.log("ChatChannel", "createLine", data)
    return `
      <article class="chat-line">
        <span class="speaker">${data["sent_by"]}</span>
        <span class="body">${data["body"]}</span>
      </article>
    `
  }
})

document.querySelectorAll("[chat-send-btn]").forEach((send_btn) => {
  send_btn.addEventListener("click", (e) => {
    const textarea_elem = e.target.parentElement.querySelector("[chat-send-textarea]")
    chatChannel.send({ sent_by: e.target.dataset["userName"], body: textarea_elem.value })
  })
})
