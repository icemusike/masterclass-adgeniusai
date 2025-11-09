// Helper function to add content to lessons
import { lessonContent } from './lessonContent'

export function addContentToLesson(lessonId: string): string[] | undefined {
  return lessonContent[lessonId]
}

