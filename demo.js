const kDemoWord = '你好';

const kOptions = {
  display: {
    animation_color: '#00c0ff',
    animation_speed: 1,
    drawing_color: '#888888',
    hint_color: '#00c0ff',
    font_color: '#00c0ff',
    font_size: '48px',
    result_colors: ['#88c874', '#c0c080', '#e87878'],
    stroke_color: '#000000',
    watermark_color: '#cccccc',
  },
  listener: (x) => console.log(x),
  messages: {
    again: 'Again!',
    should_hook: 'Should hook.',
    stroke_backward: 'Stroke backward.',
  },
  modes: [
    {
      repeat: 2,
      watermark: 1,
      demo: 0,
      single_tap: 2,
      double_tap: 2,
      max_mistakes: 4,
    }, {
      repeat: 2,
      watermark: 2,
      demo: 2,
      single_tap: Infinity,
      double_tap: Infinity,
      max_mistakes: Infinity,
    },
  ],
};

// Takes a Chinese character and returns a Promise that will resolve to the
// data for that to that character. This method may be replaced by other
// asset-loading mechanisms in real deployments of this library.
const getCharacterData = (character) => {
    if (character == '你') {
    return {"character":"你","definition":"you, second person pronoun","pinyin":["nǐ"],"decomposition":"⿰亻尔","etymology":{"type":"ideographic","hint":"Pronoun 尔 for a person 亻"},"radical":"亻","matches":[[0],[0],[1],[1],[1],[1],[1]],"strokes":["M 272 567 Q 306 613 342 669 Q 370 718 395 743 Q 405 753 400 769 Q 396 782 365 808 Q 337 827 316 828 Q 297 827 305 802 Q 318 769 306 741 Q 267 647 207 560 Q 150 476 72 385 Q 60 375 58 367 Q 54 355 70 358 Q 82 359 109 384 Q 155 421 213 493 Q 226 509 241 527 L 272 567 Z","M 241 527 Q 262 506 258 375 Q 258 374 258 370 Q 254 253 221 135 Q 215 114 224 80 Q 236 44 248 32 Q 267 16 279 44 Q 294 86 294 134 Q 303 420 314 485 Q 321 515 295 543 Q 289 549 272 567 L 241 527 Z","M 521 560 Q 561 621 602 708 Q 620 751 638 773 Q 645 786 639 799 Q 633 811 602 830 Q 572 846 554 843 Q 535 839 546 817 Q 561 795 552 757 Q 513 619 407 448 Q 398 436 397 430 Q 394 418 409 423 Q 439 432 503 532 L 521 560 Z","M 503 532 Q 527 510 555 520 Q 795 608 782 549 Q 783 543 743 468 Q 736 458 741 453 Q 745 447 756 459 Q 852 532 894 549 Q 904 552 905 561 Q 906 574 876 592 Q 852 605 828 621 Q 800 637 783 630 Q 686 590 521 560 L 503 532 Z","M 568 72 Q 531 81 494 91 Q 482 94 483 86 Q 484 79 494 71 Q 569 7 596 -33 Q 611 -49 626 -36 Q 659 -3 661 82 Q 655 149 655 345 Q 656 382 667 407 Q 676 426 659 439 Q 634 461 604 470 Q 585 477 577 469 Q 571 462 582 447 Q 619 384 603 127 Q 597 82 589 74 Q 582 67 568 72 Z","M 444 320 Q 419 262 385 208 Q 364 180 381 144 Q 388 128 409 139 Q 460 181 468 264 Q 472 295 467 319 Q 463 328 456 328 Q 449 327 444 320 Z","M 738 307 Q 789 249 847 168 Q 860 146 876 139 Q 885 138 893 146 Q 908 159 900 204 Q 891 264 743 338 Q 734 345 731 332 Q 728 319 738 307 Z"],"medians":[[[317,812],[342,786],[353,759],[303,663],[249,577],[181,485],[93,386],[68,367]],[[273,558],[274,525],[285,495],[284,441],[273,243],[256,123],[260,41]],[[556,828],[574,817],[595,783],[584,746],[539,640],[481,531],[428,453],[406,431]],[[513,532],[704,585],[796,597],[813,585],[827,563],[798,519],[746,460]],[[586,463],[615,438],[632,412],[627,73],[616,41],[604,30],[558,47],[490,85]],[[455,316],[437,243],[397,151]],[[742,326],[812,265],[856,216],[871,190],[878,154]]],"dependencies":{"亻":"rén - man, person; people","尔":"ěr - you; that, those; final particle"},"components":[{"你":0,"亻":0},{"你":1,"亻":1},{"你":2,"尔":0,"⺈":0},{"你":3,"尔":1,"⺈":1},{"你":4,"尔":2,"小":0,"亅":0},{"你":5,"尔":3,"小":1,"八":0},{"你":6,"尔":4,"小":2,"八":1}]}
    }
    return {"character":"好","definition":"good, excellent, fine; proper, suitable; well","pinyin":["hǎo"],"decomposition":"⿰女子","etymology":{"type":"ideographic","hint":"A woman 女 with a son 子"},"radical":"女","matches":[[0],[0],[0],[1],[1],[1]],"strokes":["M 330 202 Q 361 175 399 134 Q 415 119 424 118 Q 433 118 439 128 Q 446 138 442 170 Q 435 206 361 247 L 319 270 Q 292 286 258 304 Q 237 314 240 335 Q 261 393 281 453 L 293 492 Q 317 568 337 644 Q 347 690 366 715 Q 379 737 373 750 Q 360 769 313 797 Q 294 810 276 801 Q 263 794 273 778 Q 303 733 247 486 L 236 442 Q 218 373 195 336 Q 185 314 206 296 Q 254 268 294 233 L 330 202 Z","M 294 233 Q 287 226 281 217 Q 250 180 196 143 Q 183 134 165 124 Q 149 114 133 104 Q 120 95 131 92 Q 212 86 327 199 Q 328 200 330 202 L 361 247 Q 406 322 421 385 Q 449 488 463 510 Q 473 526 458 537 Q 416 576 387 569 Q 374 565 378 550 Q 387 531 387 507 L 385 481 Q 384 469 382 455 Q 375 376 319 270 L 294 233 Z","M 387 507 Q 341 501 293 492 L 247 486 Q 183 479 115 468 Q 94 465 61 471 Q 48 471 45 462 Q 41 450 49 441 Q 68 422 96 400 Q 106 396 118 402 Q 190 436 236 442 L 281 453 Q 320 463 362 474 Q 372 478 385 481 L 387 507 Z","M 671 521 Q 788 635 822 648 Q 843 655 835 672 Q 831 688 760 725 Q 739 735 716 725 Q 661 703 575 676 Q 553 669 498 669 Q 473 669 482 648 Q 491 635 511 623 Q 544 605 578 627 Q 597 636 691 676 Q 706 682 719 673 Q 732 664 726 649 Q 693 595 655 531 L 671 521 Z","M 717 430 Q 702 497 671 521 L 655 531 Q 648 535 640 538 Q 618 547 608 540 Q 595 533 608 519 Q 645 491 653 444 Q 656 434 659 421 L 668 384 Q 701 204 658 103 Q 643 76 607 83 Q 576 89 548 94 Q 536 97 542 85 Q 546 78 564 65 Q 604 31 618 5 Q 628 -14 645 -11 Q 660 -10 687 17 Q 775 107 726 391 L 717 430 Z","M 726 391 Q 783 397 947 397 Q 966 398 971 406 Q 977 416 960 430 Q 909 467 848 454 Q 793 445 717 430 L 659 421 Q 562 409 452 393 Q 431 392 447 375 Q 460 362 478 357 Q 497 351 514 356 Q 586 375 668 384 L 726 391 Z"],"medians":[[[282,788],[307,769],[327,733],[264,465],[216,321],[235,298],[386,194],[411,166],[424,133]],[[390,556],[417,530],[424,516],[422,504],[387,361],[338,255],[304,207],[260,165],[206,127],[137,97]],[[59,457],[107,434],[373,491],[380,501]],[[493,656],[517,646],[550,644],[680,692],[706,699],[743,696],[771,669],[765,657],[677,546],[674,535],[663,536]],[[613,530],[637,519],[659,499],[674,474],[687,432],[711,289],[709,166],[692,92],[672,59],[648,41],[551,85]],[[449,384],[504,377],[860,427],[906,426],[960,412]]],"dependencies":{"女":"nǚ - woman, girl; female","子":"zi - son, child; seed, egg; fruit; small thing"},"components":[{"好":0,"女":0},{"好":1,"女":1},{"好":2,"女":2},{"好":3,"子":0,"了":0,"乛":0},{"好":4,"子":1,"了":1,"亅":0},{"好":5,"子":2,"一":0}]}
}

window.onload = () => {
  const header = document.getElementById('header');
  if (!header) throw Error('Unable to find #header element.');
  header.innerText = 'Write hello (nĭhăo) below:';
  const element = document.getElementById('demo');
  if (!element) throw Error('Unable to find #demo element.');
  Promise.all(Array.from(kDemoWord).map(getCharacterData))
         .then((data) => new inkstone.Teach(data, element, kOptions))
         .catch((x) => console.error(x));
}
