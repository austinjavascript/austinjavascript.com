module.exports = (video, title) => {
  if (video) {
    const videoLink = `<a href="${video}"><em>"${title}"</em></a>`;
    let videoSrc = '';
    const reVideoParts = /https:\/\/(.*?)\/(.+)$/;
    const videoMatch = video.match(reVideoParts);

    if (videoMatch) {
      const videoId = videoMatch[2];
      let videoPlayer = 'Unable to load media.';

      if (videoMatch[1] === 'vimeo.com') {
        videoPlayer = `<iframe class="has-ratio" width="640" height="380" src="https://player.vimeo.com/video/${videoId}" frameborder="0" title="{{ title }}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
        videoSrc = ' on Vimeo';
      } else if (videoMatch[1] === 'youtu.be') {
        videoPlayer = `<iframe class="has-ratio" width="640" height="380" src="https://www.youtube.com/embed/${videoId}" frameborder="0" title="{{ title }}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        videoSrc = ' on YouTube';
      } else {
        return $videoLink;
      }

      return `<div class="message flex-item is-info">
      <h3 class="message-header">Meetup video</h3>
      <div class="message-body has-text-centered">
        <figure class="image is-16by9">
          ${videoPlayer}
        </figure>
        <figcaption class="has-margin-top">
          ${videoLink.replace('</a>', `${videoSrc}</a>`)}
        </figcaption>
      </div>
      </div>`;
    }

    return $videoLink;
  }

  return '';
};
