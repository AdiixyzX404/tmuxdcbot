const Utils = require("./Utils");

module.exports = {
  YouTubeSongAnnounce(track) {
    return (embed = {
      color: 0xff0000,
      title: `Song added [${track.requestedBy.username}]`,
      description: `[${track.title}](${track.url})`,
    });
  },
  YouTubePlaylistAnnounce(tracks) {
    return (embed = {
      color: 0xff0000,
      title: `Added ${tracks.length} tracks.`,
    });
  },
  SpotifySongAnnounce(track) {
    return (embed = {
      color: 0x1ed760,
      title: `Song added [${track.requestedBy.username}]`,
      description: `[${track.title}](${track.url})`,
    });
  },
  SpotifyListAnnounce(tracks) {
    return (embed = {
      color: 0x1ed760,
      title: `Added ${tracks.length} tracks. [${tracks[0].requestedBy.username}]`,
    });
  },
  SoundCloudSongAnnounce(track) {
    return (embed = {
      color: 0xff6d00,
      title: `Song added [${track.requestedBy.username}]`,
      description: `[${track.title}](${track.url})`,
    });
  },
  CustomSearchAnnounce(track) {
    return (embed = {
      color: 0x5c5c5c,
      title: `Song added [${track.requestedBy.username}]`,
      description: `[${track.title}](${track.url})`,
    });
  },

  NowPlaying(queue, message) {
    let song = queue.tracks[0];
    let embed = {
      color: 0x51cab0,
      title: "「ADYYBOT」BY ADII",
      description: ` Now Playing : ${song.title}`,
      fields: [
        {
          name: "\u200b",
          value: Utils.getProgressBar(queue),
          inline: false,
        },
        {
          name: `Requested by:`,
          value: `${song.requestedBy.username}`,
          inline: true,
        },
        {
          name: "From playlist:",
          value: song.fromPlaylist ? "Yes" : "No",
          inline: true,
        },
      ],
      image: {
        url: "https://telegra.ph/file/ba50233e1cd4f07f77572.png",
      },
    };
    message.channel.send({ embed: embed }).then((m) => {
      if (queue.lastNowPlaying) {
        queue.lastNowPlaying.delete({ reason: "Avoiding spam" });
      }
      queue.lastNowPlaying = m;
    });
  },
};
