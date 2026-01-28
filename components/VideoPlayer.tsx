
import React, { useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
  label?: string;
  playerId?: string;
  soundBtnId?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, label, playerId, soundBtnId }) => {
  const [isMuted, setIsMuted] = useState(true);

  const enableSound = () => {
    setIsMuted(false);
  };

  const videoUrl = isMuted 
    ? `https://www.youtube.com/embed/${videoId}?enablejsapi=1&playsinline=1&autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0`
    : `https://www.youtube.com/embed/${videoId}?enablejsapi=1&playsinline=1&autoplay=1&mute=0&controls=1&loop=1&playlist=${videoId}&modestbranding=1&rel=0`;

  return (
    <div className="mb-6 w-full flex flex-col items-center">
      <div 
        style={{
          position: 'relative',
          maxWidth: '420px',
          margin: 'auto',
          borderRadius: '14px',
          overflow: 'hidden',
          aspectRatio: '9/16',
          background: '#000',
          width: '100%'
        }}
        className="shadow-xl"
      >
        <iframe
          id={playerId || `ytplayer-${videoId}`}
          src={videoUrl}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 0
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        
        {isMuted && (
          <div
            id={soundBtnId}
            onClick={enableSound}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,.45)',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <div 
              style={{
                background: '#fff',
                color: '#000',
                fontWeight: 800,
                padding: '16px 28px',
                borderRadius: '999px',
                fontSize: '15px'
              }}
              className="animate-pulse-custom"
            >
              🔊 ATIVAR SOM
            </div>
          </div>
        )}
      </div>
      {label && <p className="text-black text-base font-medium text-center mt-3 px-4">{label}</p>}
    </div>
  );
};

export default VideoPlayer;
