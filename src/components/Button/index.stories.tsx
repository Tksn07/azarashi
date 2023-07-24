import React from 'react'
import { Button } from './index'

// コンポーネントの概要
export default {
  title: 'UI/Button',
  component: Button,
}

// 6つのストーリー
export const Default = () => <Button>ボタン</Button>
export const FullWidth = () => <Button>ボタン</Button>
export const Large = () => <Button size="large">ボタン</Button>
export const Attention = () => <Button>ボタン</Button>
export const LoadingSmall = () => (
  <Button size="small">
    ボタン
  </Button>
)
export const Disabled = () => <Button>ボタン</Button>