/* eslint-disable @typescript-eslint/no-explicit-any */
function resize1(params: any) {
  const maxWidth = params && params.maxWidth ? params.maxWidth : 600;
  const maxHeight = params && params.maxHeight ? params.maxHeight : 480;

  console.log({ maxWidth, maxHeight });
}

function resize2(params: any) {
  const maxWidth = params?.maxWidth ?? 600;
  const maxHeight = params?.maxHeight ?? 480;

  console.log({ maxWidth, maxHeight });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resize(params: any) {
  let maxWidth = 600;
  let maxHeight = 480;

  if (params && params.maxWidth) {
    maxWidth = params.maxWidth;
  }

  if (params && params.maxHeight) {
    maxHeight = params.maxHeight;
  }

  console.log({ maxWidth, maxHeight });
}
