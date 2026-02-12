// 300 DPI 기준으로 cm를 픽셀로 변환: px = cm * 118.11
const DPI = 300
const CM_TO_PX = 118.11

export const usePhotoSpecs = () => {
  const specs = [
    {
      id: 'passport',
      name: '여권사진',
      widthCm: 3.5,
      heightCm: 4.5,
      widthPx: Math.round(3.5 * CM_TO_PX),
      heightPx: Math.round(4.5 * CM_TO_PX),
      dpi: DPI
    },
    {
      id: 'id_small',
      name: '증명사진 (소)',
      widthCm: 3.0,
      heightCm: 4.0,
      widthPx: Math.round(3.0 * CM_TO_PX),
      heightPx: Math.round(4.0 * CM_TO_PX),
      dpi: DPI
    },
    {
      id: 'id_large',
      name: '증명사진 (대)',
      widthCm: 3.5,
      heightCm: 4.5,
      widthPx: Math.round(3.5 * CM_TO_PX),
      heightPx: Math.round(4.5 * CM_TO_PX),
      dpi: DPI
    },
    {
      id: 'visa',
      name: '비자사진',
      widthCm: 5.0,
      heightCm: 5.0,
      widthPx: Math.round(5.0 * CM_TO_PX),
      heightPx: Math.round(5.0 * CM_TO_PX),
      dpi: DPI
    },
    {
      id: 'license',
      name: '운전면허증',
      widthCm: 3.5,
      heightCm: 4.5,
      widthPx: Math.round(3.5 * CM_TO_PX),
      heightPx: Math.round(4.5 * CM_TO_PX),
      dpi: DPI
    }
  ]

  return {
    specs
  }
}
