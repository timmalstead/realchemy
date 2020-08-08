import "react"

declare module "react" {
  interface HTMLAttributes<T> {
    isDragging?: boolean
    isCollapsed?: boolean
  }
}
