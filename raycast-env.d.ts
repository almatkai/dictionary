/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Google API key - The API key to use the Google Translation API */
  "googlapiKey"?: string,
  /** Youdao Secret Key - The client secret to use the Youdao API */
  "youdaoapiKey"?: string,
  /** Youdao Client ID - The client ID to use the Youdao API */
  "youdaoapiClientId"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `fromCmd` command */
  export type FromCmd = ExtensionPreferences & {}
  /** Preferences accessible in the `fromSelected` command */
  export type FromSelected = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `fromCmd` command */
  export type FromCmd = {}
  /** Arguments passed to the `fromSelected` command */
  export type FromSelected = {}
}

