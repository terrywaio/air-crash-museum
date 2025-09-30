declare module 'react-globe.gl' {
  import { Component } from 'react';

  export interface GlobeProps {
    ref?: any;
    width?: number;
    height?: number;
    globeImageUrl?: string;
    backgroundImageUrl?: string;
    arcsData?: any[];
    arcColor?: any;
    arcDashLength?: number;
    arcDashGap?: number;
    arcDashAnimateTime?: number;
    arcStroke?: number;
    pointsData?: any[];
    pointColor?: any;
    pointAltitude?: number;
    pointRadius?: number;
    pointLabel?: (d: any) => string;
    arcLabel?: (d: any) => string;
    onArcClick?: (arc: any) => void;
    onGlobeReady?: () => void;
    [key: string]: any;
  }

  class Globe extends Component<GlobeProps> {}
  export default Globe;
} 