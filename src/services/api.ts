export async function request<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.EXPO_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error(
      'EXPO_PUBLIC_API_URL environment variable is not defined. Please configure it in .env'
    );
  }

  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${normalizedBase}${normalizedPath}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    const statusInfo = response.statusText ? ` ${response.statusText}` : '';
    throw new Error(`HTTP error ${response.status}${statusInfo}`);
  }

  const text = await response.text();
  return text ? (JSON.parse(text) as T) : ({} as T);
}
