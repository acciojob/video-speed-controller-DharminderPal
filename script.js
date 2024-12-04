const video = document.querySelector('.viewer');
const playButton = document.querySelector('.player__button');
const volumeSlider = document.querySelector('input[name="volume"]');
const playbackSpeedSlider = document.querySelector('input[name="playbackSpeed"]');
const skipButtons = document.querySelectorAll('.skip');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playButton.textContent = '►';
    }
}

function updateVolume() {
    video.volume = volumeSlider.value;
}

function updatePlaybackSpeed() {
    video.playbackRate = playbackSpeedSlider.value;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

playButton.addEventListener('click', togglePlay);
volumeSlider.addEventListener('input', updateVolume);
playbackSpeedSlider.addEventListener('input', updatePlaybackSpeed);
skipButtons.forEach(button => button.addEventListener('click', skip));
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', scrub);