import { getFullYear, getFooterCopy, getLatestNotification} from './utils'
testing("get the current year", () => {
    expect(getFullYear()).toBe(2021);
}
);
  
testing("get footer copy", () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
}
);
  
testing("get footer copy", () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
}
);
  
testing("latest notifications", () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
}
);
