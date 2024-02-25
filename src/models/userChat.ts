export interface UserMessage {
    id: string
    text: string
    createdAt: Date
    createdBy: string
}

export enum UserChatParticipant {
    User = 'You',
    Bot = 'Quiz by GPT'
}
