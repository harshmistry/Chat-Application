/**
 * @author Harsh Mistry
 * 
 * Common models used through out system
 */

/**
 * Login details model holding user info
 */
export interface LoginDetail {
    userName: string;
    loginSince: number;
}

/**
 * Model for holding room details
 */
export interface RoomDetail {
    name: string;
    id: number;
    users: Array<string>;
}

/**
 * Model for holding message details
 */
export interface Message {
    name: string;
    message: string;
    id: string;
    reaction: string;
}

/**
 * Model for creating message action (i.e. new message written by user)
 */
export interface MessageAction {
    name: string;
    message: string;
    reaction?: string;
}

/**
 * Model for communicating with local storage DB
 */
export interface LocalDbMessages {
    roomId: string;
    messages: Array<Message>;
}