/**
 * @author Harsh Mistry
 * 
 * Common constants to be used throughout system
 */
export class CommonConstants {
    public static HTTP_PROTOCOL = 'http://';
    public static WEBSOCKER_PROTOCOL = 'ws://';
    public static SERVER_URL = 'localhost:8080/api';
    public static readonly HTTP_SERVER_URL = CommonConstants.HTTP_PROTOCOL + CommonConstants.SERVER_URL;
    public static readonly WEBSOCKER_SERVER_URL = CommonConstants.WEBSOCKER_PROTOCOL + CommonConstants.SERVER_URL;
    public static readonly LOCAL_DB_READING_INTERVAL = 3000; //in ms
}