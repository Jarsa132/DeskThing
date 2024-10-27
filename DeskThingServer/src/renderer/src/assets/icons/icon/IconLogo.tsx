import { Icon, IconProps } from '.'

function IconLogo(props: IconProps): JSX.Element {
  return (
    <Icon {...props}>
      {' '}
      <svg viewBox="0 0 857.61 151.28" fill={props.fill || 'white'} className="deskthing-text-logo">
        {' '}
        <style>
          {`
  .deskthing-text-logo:hover .cls-1-logo-dot {
    animation: asdl_dot_movement 1s ease-in-out 1;
  }

  @keyframes asdl_dot_movement {
      0%, 5%, 85%, 100% {
         transform: translate(0px, 0px);
    }
      15%, 75% {
         transform: translate(0px, -50px);
    }
  }
   .cls-1-logo-dot {
        fill: #22c55e;
      }
  `}
        </style>
        <rect width="100%" height="100%" fill="transparent" stroke="none" />
        <g id="deskthing-text-logo" data-name="Layer 1">
          <g>
            <path d="M0,77.53C0,47.17,14.41,29.5,36.53,29.5c9.68,0,17.52,3.59,22.7,9.1,1.52,1.62,4.23.59,4.23-1.63V4.14c0-1.34,1.09-2.43,2.43-2.43h18.47c1.34,0,2.43,1.09,2.43,2.43v116.92c0,1.34-1.09,2.43-2.43,2.43h-17.55c-1.3,0-2.37-1.02-2.43-2.32l-.22-4.61c-.1-2.22-2.88-3.15-4.29-1.43-5.22,6.34-13.16,10.42-23.34,10.42C14.41,125.55,0,107.89,0,77.53ZM63.46,77.53c0-17.67-7.89-27.44-20.24-27.44s-19.04,9.61-19.04,27.44,6.52,27.44,19.04,27.44,20.24-9.95,20.24-27.44Z" />
            <path d="M99.65,77.53c0-28.64,17.5-48.03,43.39-48.03s43.05,19.04,43.05,48.54v3.4c0,1.34-1.09,2.43-2.43,2.43h-57.28c-1.49,0-2.63,1.33-2.41,2.8,1.82,11.92,9.24,18.3,19.92,18.3,7.75,0,13.6-3.64,16.35-9.58.43-.93,1.36-1.52,2.38-1.45l18.39,1.22c1.64.11,2.69,1.78,2.1,3.31-6.65,17.43-20.28,27.09-39.74,27.09-25.9,0-43.74-18.87-43.74-48.03ZM158.41,67.92c1.53,0,2.69-1.4,2.39-2.89-1.99-9.92-8.66-14.95-17.92-14.95s-16.09,5.14-18.34,14.89c-.35,1.51.82,2.95,2.38,2.95h31.49Z" />
            <path d="M200.94,94.56l18.41-.82c1.07-.05,2.06.61,2.4,1.62,2.24,6.69,7.57,10.64,18.03,10.64s15.61-2.4,15.61-7.55-2.74-7.38-17.84-10.29c-27.96-5.83-37.22-13.04-37.22-29.84s12.35-28.82,37.73-28.82,36.89,13.34,39.98,28.04c.31,1.48-.76,2.89-2.27,2.95l-18.45.82c-1.08.05-2.07-.62-2.41-1.65-2.08-6.41-7.88-10.61-16.86-10.61-9.95,0-13.89,4.46-13.89,9.26,0,6.52,4.29,8.75,20.75,12.18,26.59,5.32,34.3,12.01,34.3,27.44,0,17.15-14.41,27.61-39.62,27.61s-38.17-12.27-40.96-28.12c-.26-1.46.81-2.81,2.28-2.88Z" />
            <path d="M296.07,1.71h18.47c1.34,0,2.43,1.09,2.43,2.43v61.07c0,2.25,2.79,3.29,4.26,1.6l30-34.41c.46-.53,1.13-.83,1.83-.83h21.09c2.1,0,3.21,2.48,1.81,4.05l-30.11,33.8c-.75.84-.82,2.08-.18,3l32.8,47.27c1.12,1.61-.04,3.82-2,3.82h-20.65c-.81,0-1.57-.4-2.02-1.08l-22.76-33.91c-.88-1.31-2.75-1.45-3.81-.28l-9.63,10.56c-.41.45-.63,1.03-.63,1.64v20.64c0,1.34-1.09,2.43-2.43,2.43h-18.47c-1.34,0-2.43-1.09-2.43-2.43V4.14c0-1.34,1.09-2.43,2.43-2.43Z" />
            <path d="M413.37,94.68v-42.17c0-1.34-1.09-2.43-2.43-2.43h-21.55c-1.34,0-2.43-1.09-2.43-2.43v-13.66c0-1.34,1.09-2.43,2.43-2.43h21.55c1.34,0,2.43-1.09,2.43-2.43V12.38c0-1.34,1.09-2.43,2.43-2.43h18.47c1.34,0,2.43,1.09,2.43,2.43v16.75c0,1.34,1.09,2.43,2.43,2.43h29.1c1.34,0,2.43,1.09,2.43,2.43v13.66c0,1.34-1.09,2.43-2.43,2.43h-29.1c-1.34,0-2.43,1.09-2.43,2.43v39.94c0,8.58,3.95,12.52,12.35,12.52h19.18c1.34,0,2.43,1.09,2.43,2.43v13.66c0,1.34-1.09,2.43-2.43,2.43h-24.84c-20.58,0-30.02-9.26-30.02-28.82Z" />
            <path d="M491.27,1.71h18.47c1.34,0,2.43,1.09,2.43,2.43v32.28c0,2.23,2.74,3.27,4.24,1.62,5.27-5.85,12.8-8.54,21.83-8.54,19.04,0,28.13,13.55,28.13,34.65v56.92c0,1.34-1.09,2.43-2.43,2.43h-18.47c-1.34,0-2.43-1.09-2.43-2.43v-52.11c0-14.24-4.97-19.72-13.72-19.72-9.95,0-17.15,7.2-17.15,21.27v50.57c0,1.34-1.09,2.43-2.43,2.43h-18.47c-1.34,0-2.43-1.09-2.43-2.43V4.14c0-1.34,1.09-2.43,2.43-2.43Z" />
            <path d="M585.6,104.97h29.27c1.34,0,2.43-1.09,2.43-2.43v-50.03c0-1.34-1.09-2.43-2.43-2.43h-27.56c-1.34,0-2.43-1.09-2.43-2.43v-13.66c0-1.34,1.09-2.43,2.43-2.43h50.88c1.34,0,2.43,1.09,2.43,2.43v68.55c0,1.34,1.09,2.43,2.43,2.43h24.13c1.34,0,2.43,1.09,2.43,2.43v13.66c0,1.34-1.09,2.43-2.43,2.43h-81.59c-1.34,0-2.43-1.09-2.43-2.43v-13.66c0-1.34,1.09-2.43,2.43-2.43Z" />
            <rect
              className="cls-1-logo-dot"
              x="616.62"
              width="23.67"
              height="20.24"
              rx="2.43"
              ry="2.43"
            />
            <path d="M682.34,31.56h16.48c1.31,0,2.39,1.04,2.43,2.35l.16,5.1c.07,2.3,3.01,3.23,4.37,1.38,5.48-7.42,13.77-10.89,23.7-10.89,19.72,0,28.64,14.24,28.64,34.48v57.09c0,1.34-1.09,2.43-2.43,2.43h-18.47c-1.34,0-2.43-1.09-2.43-2.43v-51.77c0-13.72-4.63-20.07-14.06-20.07s-17.5,7.03-17.5,21.1v50.74c0,1.34-1.09,2.43-2.43,2.43h-18.47c-1.34,0-2.43-1.09-2.43-2.43V33.99c0-1.34,1.09-2.43,2.43-2.43Z" />
            <path d="M777.13,124.69l19.56-1.1c.98-.06,1.91.47,2.32,1.36,2.2,4.76,6.94,7.46,15.37,7.46,13.04,0,19.9-5.83,19.9-17.15v-2.91c0-2.19-2.67-3.26-4.18-1.68-4.7,4.96-11.75,8.01-21.2,8.01-21.95,0-38.08-17.84-38.08-43.74,0-27.61,15.44-45.45,37.56-45.45,9.39,0,17,3.37,22.14,9.51,1.45,1.73,4.25.77,4.3-1.48l.09-3.6c.03-1.32,1.11-2.37,2.43-2.37h17.84c1.34,0,2.43,1.09,2.43,2.43v78.36c0,25.9-16.81,38.94-43.22,38.94-20.86,0-34.52-9.01-39.42-23.38-.52-1.52.57-3.12,2.17-3.21ZM834.28,74.44c.17-16.98-7.89-26.07-19.55-26.07-12.52,0-19.72,9.09-19.72,26.07s7.38,25.56,19.72,25.56c11.66,0,19.55-8.58,19.55-25.56Z" />
          </g>
        </g>
      </svg>
    </Icon>
  )
}

export default IconLogo
