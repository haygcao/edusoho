import Cookies from 'js-cookie';

$('.js-show-toggle').on('click', (event) => {
  const $target = $(event.currentTarget);
  $('.js-steps').slideToggle();
  const value = $('.js-toggle-text').text() === '收起' ? '展开': '收起';
  $('.js-toggle-text').text(value);
  $target.find('i').toggleClass('es-icon-keyboardarrowup es-icon-keyboardarrowdown');
});

const showAdImage = ($cloudAd, img, res) => {
  const $img = $(img);
  const $box = $cloudAd.find('.modal-dialog');
  const boxWidth = $box.width() ? $box.width() : $(window).width() - 20;
  const WindowHeight = $(window).height();
  const width = img.width;
  let height = img.height;
  let marginTop = 0;
  if ((width / height) >= (4 / 3)) {
    height = width > boxWidth ? height / (width / boxWidth) : height * (boxWidth / width);
    marginTop = (WindowHeight - height) / 2;
  } else {
    height = WindowHeight > 600 ? 600 : WindowHeight * 0.9;
    $img.height(height);
    $img.width('auto');
    marginTop = (WindowHeight - height) / 2;
  }
  $cloudAd.find('a').attr('href', res.urlOfImage).append($img).css({'margin-top': marginTop});
  $cloudAd.modal('show');
};

const showCloudAd = () => {
  const $cloudAd = $('#cloud-ad');
  $.get($cloudAd.data('url'), (res) => {
    if (res.error) {
      return;
    }
    const img = new Image();
    if (Cookies.get('cloud-ad') == res.image) {
      return;
    }
    img.src = res.image;
    if (img.complete) {
      showAdImage($cloudAd, img, res);
    } else {
      img.onload = () => {
        showAdImage($cloudAd, img, res);
        img.onload = null;
      };
    }
  });

  $cloudAd.on('hide.bs.modal', () => {
    Cookies.set('cloud-ad', $cloudAd.find('img').attr('src'), {expires: 360 * 10});
  });
};

window.onload = () => {
  showCloudAd();
};


// 静态数据
const src = 'http://try6.edusoho.cn/files/course/2019/11-07/2038113bdf7d297596.png';
$('.js-mini-program').popover({
  trigger: 'hover',
  placement: 'bottom',
  title: '扫码打开小程序',
  template: '<div class="popover mini-program-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
  html: true,
  content: `<img src=${src}>`
});

// 数据概览
if ($('.admin-data').length) {
  $.get($('.admin-data').data('url'), (html) => {
    $('.admin-data').html(html);
  });
}

// 应用简介
if ($('.application-intro').length && $('.application-intro').data('url')) {
  $.get($('.application-intro').data('url'), (html) => {
    $('.application-intro').html(html);
  });
}

$('.js-no-network').click(function () {
  cd.message({type: 'danger', 'message': Translator.trans('admin.can_not_link_data')});
});
