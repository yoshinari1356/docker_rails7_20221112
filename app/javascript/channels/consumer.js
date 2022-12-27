// Action CableはRailsでWebSocketを扱うフレームワークを提供する
// WebSocketがある場所で`bin/rails generate channel`コマンドを使うと新しいチャネルを生成できる

import { createConsumer } from "@rails/actioncable"
// import * as ActionCable from '@rails/actioncable'

// ActionCable.logger.enabled = true

export default createConsumer()