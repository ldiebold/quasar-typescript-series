import TypicodeModel from './TypicodeModel'

export default interface Post extends TypicodeModel {
  userId: number
  title: string
  body: string
}
