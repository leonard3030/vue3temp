<script>
export default {
  data() {
    return {
      primary_color: "#1d2088",
      secondary_color: "#1eb9ee",
    };
  },
  methods: {
    $urlCompatible(name, roll = false) {
      if (roll) {
        return name.toLowerCase().replace(/\s/g, "-");
      }
      return name.toLowerCase().replace(/\s/g, "-");
    },
    $img(name) {
      return `/images/${name}`;
    },
    $upload(name) {
      return this.$store.state.apiUploadUrl + `${name}`;
    },
    $startLoader() {
      document.body.style.overflow = "hidden";
      this.$store.state.startLoader = true;
    },
    $stopLoader() {
      document.body.style.overflow = "auto";
      this.$store.state.startLoader = false;
    },
    $urlContains(url) {
      return this.$route.path.includes(url);
    },
    $AdminLogin(user, token) {
      localStorage.setItem("nmw_admin", JSON.stringify(user));
      localStorage.setItem("nmw_admin_token", token);
      this.$router.push({ name: "AdminDashboard" });
    },
    $getAdmin() {
      return JSON.parse(localStorage.getItem("nmw_admin"));
    },
    $getAdminToken() {
      // return localStorage.getItem("nmw_admin_token");
      return "296da35eb30c10d6c4a7cdbfa55d7f9bc6d9441e8b3c61260218cf6481dd0206803abf67f66a5029a379c5bc7205a31a6661cc1725aa1b8bce637c8eb5feb0b21720088661";
    },
    $adminIsAdmin() {
      const user = JSON.parse(localStorage.getItem("nmw_admin"));
      if (user.type == "admin") {
        return true;
      }
      return false;
    },
    $adminIsAgent() {
      const user = JSON.parse(localStorage.getItem("nmw_admin"));
      if (user.type == "agent") {
        return true;
      }
      return false;
    },
    $canAddHouse(houses) {
      const user = JSON.parse(localStorage.getItem("nmw_admin"));
      if (user.type == "admin" && user.organization.max_houses > houses) {
        return true;
      }
      return false;
    },
    $userLogout() {
      localStorage.removeItem("nmw_admin");
      localStorage.removeItem("nmw_admin_token");
      this.$router.push({ name: "AdminLogin" });
    },
    $imageurlalt() {
      event.target.src = "https://via.placeholder.com/300";
    },
    $price(price) {
      if (isNaN(price)) {
        return price;
      } else {
        return "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
    $date(date, type = "date") {
      if (!date) {
        return;
      }
      let newDate = new Date(date);
      let year = newDate.getFullYear();
      let dayName = newDate.toLocaleString("default", { weekday: "long" });
      let dayNumber = newDate.toLocaleString("default", { day: "numeric" });
      // add 0 before day if less than 10
      if (dayNumber < 10) {
        dayNumber = "0" + dayNumber;
      }
      let monthName = newDate.toLocaleString("default", { month: "long" });
      let monthNameShort = newDate.toLocaleString("default", {
        month: "short",
      });
      let monthNumber = newDate.toLocaleString("default", { month: "numeric" });
      // add 0 before month if less than 10
      if (monthNumber < 10) {
        monthNumber = "0" + monthNumber;
      }
      let dateDots = `${dayNumber}.${monthNumber}.${year}`;
      if (type == "date") {
        return `${dayName}, ${dayNumber} ${monthName}, ${year}`;
      }
      if (type == "dots") {
        return dateDots;
      }
      if (type == "day") {
        return dayNumber;
      }
      if (type == "month") {
        return monthNameShort;
      }
      if (type == "year") {
        return year;
      }
    },
    $ago(date) {
      if (!date) {
        return;
      }
      // get time ago since  date
      let newDate = new Date(date);
      let today = new Date();
      let diff = today - newDate;
      let seconds = Math.floor(diff / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);
      let weeks = Math.floor(days / 7);
      let months = Math.floor(days / 30);
      let years = Math.floor(days / 365);
      if (seconds < 60) {
        return seconds + " seconds ago";
      } else if (minutes < 60) {
        return minutes + " minutes ago";
      } else if (hours < 24) {
        return hours + " hours ago";
      } else if (days < 7) {
        return days + " days ago";
      } else if (weeks < 4) {
        return weeks + " weeks ago";
      } else if (months < 12) {
        return months + " months ago";
      } else {
        return years + " years ago";
      }
    },
    $toggleSANav() {
      this.$store.state.showSANav = !this.$store.state.showSANav;
      localStorage.setItem("showSANav", this.$store.state.showSANav);
    },
    $comma(amount) {
      if (!amount) {
        return;
      }
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    $changePage(page) {
      if (this.currentPage === page) return;
      this.currentPage = page;
      this.getItems();
    },
    $previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getItems();
      }
    },
    $nextPage() {
      if (this.currentPage < this.pagesNumber) {
        this.currentPage++;
        this.getItems();
      }
    },
    $num(val) {
      // add 0 before number if less than 10
      if (val < 10) {
        return "0" + val;
      }
      return val;
    },
    $fiesIcons(type, name) {
      if (type == "folder") {
        return "folder.png";
      }
      if (type == "file") {
        let ext = name.split(".").pop();
        if (ext == "pdf") {
          return "pdf.png";
        }
        if (ext == "doc" || ext == "docx") {
          return "word.png";
        }
        if (ext == "xls" || ext == "xlsx") {
          return "excel.png";
        }
        if (ext == "ppt" || ext == "pptx") {
          return "ppt.png";
        }
        if (ext == "txt") {
          return "txt.png";
        }
        if (
          ext == "zip" ||
          ext == "7z" ||
          ext == "tar" ||
          ext == "gz" ||
          ext == "rar"
        ) {
          return "zip.png";
        }
        if (
          ext == "jpg" ||
          ext == "jpeg" ||
          ext == "png" ||
          ext == "gif" ||
          ext == "svg"
        ) {
          return "image.png";
        }
        if (
          ext == "mp3" ||
          ext == "wav" ||
          ext == "ogg" ||
          ext == "flac" ||
          ext == "wma"
        ) {
          return "audio.png";
        }
        if (
          ext == "mp4" ||
          ext == "avi" ||
          ext == "mkv" ||
          ext == "mov" ||
          ext == "flv"
        ) {
          return "video.png";
        }
        if (
          ext == "exe" ||
          ext == "msi" ||
          ext == "apk" ||
          ext == "dmg" ||
          ext == "deb"
        ) {
          return "exe.png";
        }
        if (
          ext == "html" ||
          ext == "css" ||
          ext == "js" ||
          ext == "php" ||
          ext == "py"
        ) {
          return "code.png";
        }
        if (
          ext == "json" ||
          ext == "xml" ||
          ext == "csv" ||
          ext == "tsv" ||
          ext == "yaml"
        ) {
          return "json.png";
        }
        if (ext == "ai" || ext == "eps") {
          return "ai.png";
        }
        if (ext == "psd" || ext == "psb") {
          return "potoshop.png";
        }
        return "file.png";
      }
    },
    $fp(price) {
      if (price >= 1000000000) {
        return (price / 1000000000).toFixed(1).replace(/\.0$/, "") + "B RWF";
      }
      if (price >= 1000000) {
        return (price / 1000000).toFixed(1).replace(/\.0$/, "") + "M RWF";
      }
      return price + " RWF";
    },
  },
};
</script>