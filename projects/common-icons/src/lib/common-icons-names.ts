export const ICON_NAMES = [
  'cancel',
  'check',
  'check_disabled',
  'clear',
  'room',
  'report',
  'photo_library',
  'event_available',
  'event_busy',
  'report',
  'room',
  'playlist_add_check'
];

export class IconNamesHelper {
  public static inList(iconName: string): boolean {
    return !!ICON_NAMES.find((name: string) => (name == iconName));
  }
}

