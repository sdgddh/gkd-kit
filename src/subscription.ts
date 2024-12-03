import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 2,
  name: '李跳跳规则转GKD订阅',
  version: 0,
  author: 'adproqwq',
  globalGroups: [],
  categories: [],
  apps: [
    {
      id: 'com.xiaohu.olevodmobile',
      name: '欧乐影院',
      groups: [
        {
          key: 1,
          name: '欧乐影院-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="init_time_text"||desc*="init_time_text"||id*="init_time_text")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.mobileqq',
      name: 'QQ',
      groups: [
        {
          key: 1,
          name: 'QQ-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'QQ-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="更多"||desc="更多"||id="更多")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: 'QQ-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="关闭此条广告"||desc="关闭此条广告"||id="关闭此条广告")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: 'QQ-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.androidqqmail',
      name: 'QQ邮箱',
      groups: [
        {
          key: 1,
          name: 'QQ邮箱-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="下次再说"||desc*="下次再说"||id*="下次再说")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.ximalaya.ting.android',
      name: '喜马拉雅',
      groups: [
        {
          key: 1,
          name: '喜马拉雅-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不开启"||desc*="暂不开启"||id*="暂不开启")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '喜马拉雅-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '喜马拉雅-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不开启"||desc*="暂不开启"||id*="暂不开启")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '喜马拉雅-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="main_iv_limit_close"||desc*="main_iv_limit_close"||id*="main_iv_limit_close")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '喜马拉雅-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="host_lockscreen_guide_alert_dialog_rich_confirm_cancel_btn"||desc*="host_lockscreen_guide_alert_dialog_rich_confirm_cancel_btn"||id*="host_lockscreen_guide_alert_dialog_rich_confirm_cancel_btn")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '喜马拉雅-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="host_timeline_card_close"||desc*="host_timeline_card_close"||id*="host_timeline_card_close")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '喜马拉雅-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="main_x_play_anchor_shop_close_btn"||desc*="main_x_play_anchor_shop_close_btn"||id*="main_x_play_anchor_shop_close_btn")]',
              ],
            },
          ],
        },
        {
          key: 8,
          name: '喜马拉雅-8',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="live_iv_bottom_close"||desc*="live_iv_bottom_close"||id*="live_iv_bottom_close")]',
              ],
            },
          ],
        },
        {
          key: 9,
          name: '喜马拉雅-9',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 10,
          name: '喜马拉雅-10',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="引导关闭按钮"||desc*="引导关闭按钮"||id*="引导关闭按钮")]',
              ],
            },
          ],
        },
        {
          key: 11,
          name: '喜马拉雅-11',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="liveBtnExit"||desc*="liveBtnExit"||id*="liveBtnExit")]',
              ],
            },
          ],
        },
        {
          key: 12,
          name: '喜马拉雅-12',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="main_ad_broadside_close"||desc*="main_ad_broadside_close"||id*="main_ad_broadside_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.coolapk.market',
      name: '酷安',
      groups: [
        {
          key: 1,
          name: '酷安-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="取消"||desc="取消"||id="取消")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '酷安-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="关闭"||desc="关闭"||id="关闭")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '酷安-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="不感兴趣"||desc="不感兴趣"||id="不感兴趣")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '酷安-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="不感兴趣"||desc="不感兴趣"||id="不感兴趣")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '酷安-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_view"||desc*="close_view"||id*="close_view")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.miui.huanji',
      name: '小米换机',
      groups: [
        {
          key: 1,
          name: '小米换机-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="下次再说"||desc*="下次再说"||id*="下次再说")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.qiyi.video',
      name: '爱奇艺',
      groups: [
        {
          key: 1,
          name: '爱奇艺-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="unused_res_a"||desc*="unused_res_a"||id*="unused_res_a")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '爱奇艺-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="狠心离开"||desc*="狠心离开"||id*="狠心离开")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '爱奇艺-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="close"||desc="close"||id="close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.qinlin.edoor',
      name: '亲邻开门',
      groups: [
        {
          key: 1,
          name: '亲邻开门-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '亲邻开门-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.feicui.vdhelper',
      name: '翡翠视频',
      groups: [
        {
          key: 1,
          name: '翡翠视频-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ksad_auto_close_btn"||desc*="ksad_auto_close_btn"||id*="ksad_auto_close_btn")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '翡翠视频-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '翡翠视频-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="img_native_close"||desc*="img_native_close"||id*="img_native_close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '翡翠视频-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '翡翠视频-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="跳过"||desc*="跳过"||id*="跳过")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '翡翠视频-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_feedback_close"||desc*="iv_feedback_close"||id*="iv_feedback_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.cmbchina.ccd.pluto.cmbActivity',
      name: '掌上生活',
      groups: [
        {
          key: 1,
          name: '掌上生活-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="bt_cancel_experience"||desc*="bt_cancel_experience"||id*="bt_cancel_experience")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '掌上生活-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="img_cf_view_close"||desc*="img_cf_view_close"||id*="img_cf_view_close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '掌上生活-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="img_close_floating_ad_cmb"||desc*="img_close_floating_ad_cmb"||id*="img_close_floating_ad_cmb")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '掌上生活-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="btn_mid_center_couple_negative"||desc*="btn_mid_center_couple_negative"||id*="btn_mid_center_couple_negative")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '掌上生活-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="残忍离开"||desc*="残忍离开"||id*="残忍离开")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '掌上生活-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="img_cmb_drag_pendant_close"||desc*="img_cmb_drag_pendant_close"||id*="img_cmb_drag_pendant_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.baidu.tieba',
      name: '百度贴吧',
      groups: [
        {
          key: 1,
          name: '百度贴吧-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="稍后再说"||desc*="稍后再说"||id*="稍后再说")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.xiachufang',
      name: '下厨房',
      groups: [
        {
          key: 1,
          name: '下厨房-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.caing.news',
      name: '财新',
      groups: [
        {
          key: 1,
          name: '财新-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '财新-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="dialog_close"||desc*="dialog_close"||id*="dialog_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.netease.mail',
      name: '网易邮箱大师',
      groups: [
        {
          key: 1,
          name: '网易邮箱大师-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="tv_ignore_this_version"||desc*="tv_ignore_this_version"||id*="tv_ignore_this_version")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '网易邮箱大师-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.baidu.searchbox',
      name: '百度',
      groups: [
        {
          key: 1,
          name: '百度-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不允许"||desc*="不允许"||id*="不允许")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'org.zwanoo.android.speedtest',
      name: 'SpeedTest',
      groups: [
        {
          key: 1,
          name: 'SpeedTest-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="suite_completed_close_ad_button"||desc*="suite_completed_close_ad_button"||id*="suite_completed_close_ad_button")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.duowan.kiwi',
      name: '虎牙直播',
      groups: [
        {
          key: 1,
          name: '虎牙直播-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="huyaui_float_notify_count_close"||desc*="huyaui_float_notify_count_close"||id*="huyaui_float_notify_count_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '虎牙直播-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_right"||desc*="iv_right"||id*="iv_right")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '虎牙直播-3',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
      ],
    },
    {
      id: 'com.sgcc.wsgw.cn',
      name: '网上国网',
      groups: [
        {
          key: 1,
          name: '网上国网-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="home_close_img"||desc*="home_close_img"||id*="home_close_img")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.xingin.xhs',
      name: '小红书',
      groups: [
        {
          key: 1,
          name: '小红书-1',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 2,
          name: '小红书-2',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
      ],
    },
    {
      id: 'io.iftech.android.box',
      name: '小组件盒子',
      groups: [
        {
          key: 1,
          name: '小组件盒子-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivClose"||desc*="ivClose"||id*="ivClose")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '小组件盒子-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="放弃福利"||desc*="放弃福利"||id*="放弃福利")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '小组件盒子-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivClose"||desc*="ivClose"||id*="ivClose")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.duokan.phone.remotecontroller',
      name: '万能遥控',
      groups: [
        {
          key: 1,
          name: '万能遥控-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="image_close_banner"||desc*="image_close_banner"||id*="image_close_banner")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.ss.android.article.video',
      name: '西瓜视频',
      groups: [
        {
          key: 1,
          name: '西瓜视频-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="red_packet_close"||desc*="red_packet_close"||id*="red_packet_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '西瓜视频-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="bs3"||desc*="bs3"||id*="bs3")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '西瓜视频-3',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
      ],
    },
    {
      id: 'com.greenpoint.android.mc10086.activity',
      name: '中国移动',
      groups: [
        {
          key: 1,
          name: '中国移动-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="以后再说"||desc*="以后再说"||id*="以后再说")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '中国移动-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不允许"||desc*="不允许"||id*="不允许")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '中国移动-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '中国移动-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '中国移动-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="此图片未加标签"||desc*="此图片未加标签"||id*="此图片未加标签")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '中国移动-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '中国移动-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close_top"||desc*="iv_close_top"||id*="iv_close_top")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cn.gov.pbc.dcep',
      name: '数字人民币',
      groups: [
        {
          key: 1,
          name: '数字人民币-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="upgrade_dialog_cancel"||desc*="upgrade_dialog_cancel"||id*="upgrade_dialog_cancel")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.sankuai.meituan',
      name: '美团',
      groups: [
        {
          key: 1,
          name: '美团-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="btn_close"||desc*="btn_close"||id*="btn_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '美团-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="bottom_center_close_button"||desc*="bottom_center_close_button"||id*="bottom_center_close_button")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '美团-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="放弃机会"||desc*="放弃机会"||id*="放弃机会")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '美团-4',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 5,
          name: '美团-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="popCloseBtn"||desc*="popCloseBtn"||id*="popCloseBtn")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.sina.weibo',
      name: '微博',
      groups: [
        {
          key: 1,
          name: '微博-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="right_icon"||desc*="right_icon"||id*="right_icon")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '微博-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不开启"||desc*="暂不开启"||id*="暂不开启")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '微博-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '微博-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="以后再说"||desc*="以后再说"||id*="以后再说")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '微博-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close_icon"||desc*="iv_close_icon"||id*="iv_close_icon")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '微博-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不感兴趣"||desc*="不感兴趣"||id*="不感兴趣")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '微博-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close_icon"||desc*="iv_close_icon"||id*="iv_close_icon")]',
              ],
            },
          ],
        },
        {
          key: 8,
          name: '微博-8',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不感兴趣"||desc*="不感兴趣"||id*="不感兴趣")]',
              ],
            },
          ],
        },
        {
          key: 9,
          name: '微博-9',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 10,
          name: '微博-10',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 11,
          name: '微博-11',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="以后再说"||desc*="以后再说"||id*="以后再说")]',
              ],
            },
          ],
        },
        {
          key: 12,
          name: '微博-12',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 13,
          name: '微博-13',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不了，谢谢"||desc*="不了，谢谢"||id*="不了，谢谢")]',
              ],
            },
          ],
        },
        {
          key: 14,
          name: '微博-14',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="right_top_tag"||desc*="right_top_tag"||id*="right_top_tag")]',
              ],
            },
          ],
        },
        {
          key: 15,
          name: '微博-15',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不感兴趣"||desc*="不感兴趣"||id*="不感兴趣")]',
              ],
            },
          ],
        },
        {
          key: 16,
          name: '微博-16',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="mIvRight"||desc*="mIvRight"||id*="mIvRight")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.xiaomi.market',
      name: '小米应用商店',
      groups: [
        {
          key: 1,
          name: '小米应用商店-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="btn_close_update_setting"||desc*="btn_close_update_setting"||id*="btn_close_update_setting")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bubei.tingshu',
      name: '懒人听书',
      groups: [
        {
          key: 1,
          name: '懒人听书-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '懒人听书-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '懒人听书-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="colse_iv"||desc*="colse_iv"||id*="colse_iv")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '懒人听书-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_usercenter_notify_close"||desc*="iv_usercenter_notify_close"||id*="iv_usercenter_notify_close")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '懒人听书-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="icon_close_popup"||desc*="icon_close_popup"||id*="icon_close_popup")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '懒人听书-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ad_close_iv"||desc*="ad_close_iv"||id*="ad_close_iv")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '懒人听书-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="dialog_close_btn"||desc*="dialog_close_btn"||id*="dialog_close_btn")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.cainiao.wireless',
      name: '菜鸟',
      groups: [
        {
          key: 1,
          name: '菜鸟-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '菜鸟-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="dialog_full_image_close"||desc*="dialog_full_image_close"||id*="dialog_full_image_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.baidu.haokan',
      name: '好看视频',
      groups: [
        {
          key: 1,
          name: '好看视频-1',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 2,
          name: '好看视频-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'org.telegram.messenger.web',
      name: 'Telegram',
      groups: [
        {
          key: 1,
          name: 'Telegram-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="请稍后提醒我"||desc*="请稍后提醒我"||id*="请稍后提醒我")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.ss.android.ugc.aweme.lite',
      name: '抖音极速版',
      groups: [
        {
          key: 1,
          name: '抖音极速版-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="dtj"||desc*="dtj"||id*="dtj")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '抖音极速版-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '抖音极速版-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不感兴趣"||desc*="不感兴趣"||id*="不感兴趣")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '抖音极速版-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '抖音极速版-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '抖音极速版-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.baidu.xin.aiqicha',
      name: '爱企查',
      groups: [
        {
          key: 1,
          name: '爱企查-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不更新"||desc*="暂不更新"||id*="暂不更新")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '爱企查-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="notice_dialog_cancel_iv"||desc*="notice_dialog_cancel_iv"||id*="notice_dialog_cancel_iv")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '爱企查-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '爱企查-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="cancel_iv"||desc*="cancel_iv"||id*="cancel_iv")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '爱企查-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不了，谢谢"||desc*="不了，谢谢"||id*="不了，谢谢")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.alicloud.databox',
      name: '阿里云盘',
      groups: [
        {
          key: 1,
          name: '阿里云盘-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="立即查看"||desc*="立即查看"||id*="立即查看")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.mm.android.lc',
      name: '乐橙',
      groups: [
        {
          key: 1,
          name: '乐橙-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不开启"||desc*="暂不开启"||id*="暂不开启")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.qiyi.video.lite',
      name: '爱奇艺极速版',
      groups: [
        {
          key: 1,
          name: '爱奇艺极速版-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="unused_res_a"||desc*="unused_res_a"||id*="unused_res_a")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '爱奇艺极速版-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="关闭"||desc="关闭"||id="关闭")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.weishi',
      name: '微视',
      groups: [
        {
          key: 1,
          name: '微视-1',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 2,
          name: '微视-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '微视-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="Close"||desc*="Close"||id*="Close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.xiaomi.smarthome',
      name: '米家',
      groups: [],
    },
    {
      id: 'com.taobao.idlefish',
      name: '闲鱼',
      groups: [
        {
          key: 1,
          name: '闲鱼-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不升级"||desc*="暂不升级"||id*="暂不升级")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '闲鱼-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="bar_close"||desc*="bar_close"||id*="bar_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.jd.jdlite',
      name: '京喜特价',
      groups: [
        {
          key: 1,
          name: '京喜特价-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.android.thememanager',
      name: '主题壁纸',
      groups: [
        {
          key: 1,
          name: '主题壁纸-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ad_close_btn"||desc*="ad_close_btn"||id*="ad_close_btn")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.kmxs.reader',
      name: '七猫免费小说',
      groups: [
        {
          key: 1,
          name: '七猫免费小说-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="young_dialog_close_img"||desc*="young_dialog_close_img"||id*="young_dialog_close_img")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '七猫免费小说-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="btn_open_cancel"||desc*="btn_open_cancel"||id*="btn_open_cancel")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '七猫免费小说-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close_bonus"||desc*="iv_close_bonus"||id*="iv_close_bonus")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '七猫免费小说-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_red_packet"||desc*="close_red_packet"||id*="close_red_packet")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '七猫免费小说-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="imageView_close"||desc*="imageView_close"||id*="imageView_close")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '七猫免费小说-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '七猫免费小说-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_ad_direct_close"||desc*="iv_ad_direct_close"||id*="iv_ad_direct_close")]',
              ],
            },
          ],
        },
        {
          key: 8,
          name: '七猫免费小说-8',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ad_direct_close"||desc*="ad_direct_close"||id*="ad_direct_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.qq.ac.android',
      name: '腾讯动漫',
      groups: [
        {
          key: 1,
          name: '腾讯动漫-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '腾讯动漫-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '腾讯动漫-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_del"||desc*="iv_del"||id*="iv_del")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.qq.qcloud',
      name: '腾讯微云',
      groups: [
        {
          key: 1,
          name: '腾讯微云-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '腾讯微云-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="btn_close"||desc*="btn_close"||id*="btn_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.sup.android.superb',
      name: '皮皮虾',
      groups: [
        {
          key: 1,
          name: '皮皮虾-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="以后再说"||desc*="以后再说"||id*="以后再说")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '皮皮虾-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="bn0"||desc*="bn0"||id*="bn0")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '皮皮虾-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="我知道了"||desc="我知道了"||id="我知道了")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.hunantv.imgo.activity',
      name: '芒果TV',
      groups: [
        {
          key: 1,
          name: '芒果TV-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivCloseAlert"||desc*="ivCloseAlert"||id*="ivCloseAlert")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '芒果TV-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivJbpFirstPopClose"||desc*="ivJbpFirstPopClose"||id*="ivJbpFirstPopClose")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '芒果TV-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="之后再说"||desc*="之后再说"||id*="之后再说")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '芒果TV-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="apperience_close"||desc*="apperience_close"||id*="apperience_close")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '芒果TV-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivClose"||desc*="ivClose"||id*="ivClose")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '芒果TV-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_pop_close"||desc*="iv_pop_close"||id*="iv_pop_close")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '芒果TV-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="btnClose"||desc*="btnClose"||id*="btnClose")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.jd.iots',
      name: '京东小家',
      groups: [
        {
          key: 1,
          name: '京东小家-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="gift_close"||desc*="gift_close"||id*="gift_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '京东小家-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.hose.ekuaibao',
      name: '易快报',
      groups: [
        {
          key: 1,
          name: '易快报-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不感兴趣"||desc*="不感兴趣"||id*="不感兴趣")]',
              ],
              actionMaximum: 5,
            },
          ],
        },
      ],
    },
    {
      id: 'com.jingdong.app.mall',
      name: '京东',
      groups: [
        {
          key: 1,
          name: '京东-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="icon_cart_egg_close"||desc*="icon_cart_egg_close"||id*="icon_cart_egg_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '京东-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭按钮"||desc*="关闭按钮"||id*="关闭按钮")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '京东-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.ss.android.ugc.aweme',
      name: '抖音',
      groups: [
        {
          key: 1,
          name: '抖音-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="以后再说"||desc*="以后再说"||id*="以后再说")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '抖音-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '抖音-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '抖音-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="h7e"||desc*="h7e"||id*="h7e")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '抖音-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不"||desc*="暂不"||id*="暂不")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '抖音-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="qpb"||desc*="qpb"||id*="qpb")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '抖音-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不开启"||desc*="暂不开启"||id*="暂不开启")]',
              ],
            },
          ],
        },
        {
          key: 8,
          name: '抖音-8',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="拒绝"||desc*="拒绝"||id*="拒绝")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'air.tv.douyu.android',
      name: '斗鱼',
      groups: [
        {
          key: 1,
          name: '斗鱼-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="忽略"||desc*="忽略"||id*="忽略")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '斗鱼-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="byr"||desc*="byr"||id*="byr")]',
              ],
              actionMaximum: 5,
            },
          ],
        },
        {
          key: 3,
          name: '斗鱼-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="avq"||desc*="avq"||id*="avq")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.ss.android.article.lite',
      name: '头条搜索极速版',
      groups: [
        {
          key: 1,
          name: '头条搜索极速版-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '头条搜索极速版-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cn.com.ruijie.magicbox',
      name: '无线魔盒',
      groups: [
        {
          key: 1,
          name: '无线魔盒-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="imageView_close"||desc*="imageView_close"||id*="imageView_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.njh.biubiu',
      name: 'biubiu加速器',
      groups: [
        {
          key: 1,
          name: 'biubiu加速器-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不允许"||desc*="不允许"||id*="不允许")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'biubiu加速器-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ad_close"||desc*="ad_close"||id*="ad_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.mm',
      name: '微信',
      groups: [
        {
          key: 1,
          name: '微信-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="feedbackIcon"||desc*="feedbackIcon"||id*="feedbackIcon")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '微信-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不感兴趣"||desc*="不感兴趣"||id*="不感兴趣")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '微信-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="与我无关"||desc*="与我无关"||id*="与我无关")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.fanli.android.apps',
      name: '返利',
      groups: [
        {
          key: 1,
          name: '返利-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="javascript:;"||desc*="javascript:;"||id*="javascript:;")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '返利-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '返利-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.miui.systemAdSolution',
      name: 'miui系统广告',
      groups: [
        {
          key: 1,
          name: 'miui系统广告-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不感兴趣"||desc*="不感兴趣"||id*="不感兴趣")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.taobao.trip',
      name: '飞猪',
      groups: [
        {
          key: 1,
          name: '飞猪-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_icon"||desc*="close_icon"||id*="close_icon")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.kugou.android.lite',
      name: '酷狗概念版',
      groups: [
        {
          key: 1,
          name: '酷狗概念版-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="知道了"||desc*="知道了"||id*="知道了")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.eastmoney.android.berlin',
      name: '东方财富',
      groups: [
        {
          key: 1,
          name: '东方财富-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="push_on_notify_delete"||desc*="push_on_notify_delete"||id*="push_on_notify_delete")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gov.pianzong.androidnga',
      name: 'NGA玩家社区',
      groups: [
        {
          key: 1,
          name: 'NGA玩家社区-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_tg_ad"||desc*="iv_tg_ad"||id*="iv_tg_ad")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'NGA玩家社区-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close_notification_guide"||desc*="iv_close_notification_guide"||id*="iv_close_notification_guide")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: 'NGA玩家社区-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close_community_ad"||desc*="iv_close_community_ad"||id*="iv_close_community_ad")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: 'NGA玩家社区-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close_ad"||desc*="iv_close_ad"||id*="iv_close_ad")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.miui.packageinstaller',
      name: '应用包管理组件',
      groups: [
        {
          key: 1,
          name: '应用包管理组件-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="放弃"||desc*="放弃"||id*="放弃")]',
              ],
            },
            {
              key: 1,
              matches: [
                '[(text*="准备中"||desc*="准备中"||id*="准备中")]',
              ],
              actionMaximum: 0,
            },
            {
              key: 2,
              matches: [
                '[(text*="检测中"||desc*="检测中"||id*="检测中")]',
              ],
              actionMaximum: 0,
            },
            {
              key: 3,
              matches: [
                '[(text*="继续更新"||desc*="继续更新"||id*="继续更新")]',
              ],
              actionMaximum: 3,
            },
            {
              key: 4,
              matches: [
                '[(text*="继续安装"||desc*="继续安装"||id*="继续安装")]',
              ],
              actionMaximum: 3,
            },
            {
              key: 5,
              matches: [
                '[(text*="继续"||desc*="继续"||id*="继续")]',
              ],
              actionMaximum: 3,
            },
            {
              key: 6,
              matches: [
                '[(text*="安装中"||desc*="安装中"||id*="安装中")]',
              ],
              actionMaximum: 0,
            },
            {
              key: 7,
              matches: [
                '[(text*="完成"||desc*="完成"||id*="完成")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'im.xingzhe',
      name: '行者骑行',
      groups: [
        {
          key: 1,
          name: '行者骑行-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.sankuai.movie',
      name: '猫眼',
      groups: [
        {
          key: 1,
          name: '猫眼-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.dmzj.manhua',
      name: '动漫之家',
      groups: [
        {
          key: 1,
          name: '动漫之家-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="我知道了"||desc="我知道了"||id="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '动漫之家-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivAdClose"||desc*="ivAdClose"||id*="ivAdClose")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '动漫之家-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="native_ad_close"||desc*="native_ad_close"||id*="native_ad_close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '动漫之家-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '动漫之家-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="native_ad_close"||desc*="native_ad_close"||id*="native_ad_close")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '动漫之家-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="native_ad_close"||desc*="native_ad_close"||id*="native_ad_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'net.csdn.csdnplus',
      name: 'CSDN',
      groups: [
        {
          key: 1,
          name: 'CSDN-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'CSDN-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="img_nps_close"||desc*="img_nps_close"||id*="img_nps_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.mi.health',
      name: '小米运动健康',
      groups: [
        {
          key: 1,
          name: '小米运动健康-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="放弃更新"||desc*="放弃更新"||id*="放弃更新")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.alibaba.ailabs.tg',
      name: '天猫精灵',
      groups: [
        {
          key: 1,
          name: '天猫精灵-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="cv_cancel_notification_tip"||desc*="cv_cancel_notification_tip"||id*="cv_cancel_notification_tip")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '天猫精灵-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="bt_close"||desc*="bt_close"||id*="bt_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.netease.cloudmusic',
      name: '网易云音乐',
      groups: [
        {
          key: 1,
          name: '网易云音乐-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="md_dialog_cm_close_btn"||desc*="md_dialog_cm_close_btn"||id*="md_dialog_cm_close_btn")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '网易云音乐-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.daimajia.gold',
      name: '稀土掘金',
      groups: [
        {
          key: 1,
          name: '稀土掘金-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.lemon.lv',
      name: '剪映',
      groups: [
        {
          key: 1,
          name: '剪映-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="confirm_cancel"||desc*="confirm_cancel"||id*="confirm_cancel")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '剪映-2',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 3,
          name: '剪映-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.kwai.videoeditor',
      name: '快影',
      groups: [
        {
          key: 1,
          name: '快影-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="sy"||desc*="sy"||id*="sy")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.pupumall.customer',
      name: '朴朴超市',
      groups: [
        {
          key: 1,
          name: '朴朴超市-1',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
      ],
    },
    {
      id: 'com.tongcheng.android',
      name: '同程旅行',
      groups: [
        {
          key: 1,
          name: '同程旅行-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_home_ad_close"||desc*="iv_home_ad_close"||id*="iv_home_ad_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '同程旅行-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="homeLocationPermissionClose"||desc*="homeLocationPermissionClose"||id*="homeLocationPermissionClose")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '同程旅行-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.cubic.autohome',
      name: '汽车之家',
      groups: [
        {
          key: 1,
          name: '汽车之家-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="advert_creative_head_img_text_layout_close_btn_v3"||desc*="advert_creative_head_img_text_layout_close_btn_v3"||id*="advert_creative_head_img_text_layout_close_btn_v3")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.hupu.games',
      name: '虎扑',
      groups: [
        {
          key: 1,
          name: '虎扑-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iiv_close"||desc*="iiv_close"||id*="iiv_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '虎扑-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="upload"||desc*="upload"||id*="upload")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.netease.snailread',
      name: '网易蜗牛读书',
      groups: [
        {
          key: 1,
          name: '网易蜗牛读书-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="gift_close"||desc*="gift_close"||id*="gift_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '网易蜗牛读书-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="gift_close"||desc*="gift_close"||id*="gift_close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '网易蜗牛读书-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="daily_close"||desc*="daily_close"||id*="daily_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.sina.weibolite',
      name: '微博极速版',
      groups: [
        {
          key: 1,
          name: '微博极速版-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="拒绝"||desc*="拒绝"||id*="拒绝")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '微博极速版-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭广告"||desc*="关闭广告"||id*="关闭广告")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '微博极速版-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不感兴趣"||desc*="不感兴趣"||id*="不感兴趣")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.miui.gallery',
      name: '相册',
      groups: [
        {
          key: 1,
          name: '相册-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="update_title_tv"||desc*="update_title_tv"||id*="update_title_tv")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.ss.android.auto',
      name: '懂车帝',
      groups: [
        {
          key: 1,
          name: '懂车帝-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="以后再说"||desc*="以后再说"||id*="以后再说")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cn.kuwo.player',
      name: '酷我音乐',
      groups: [
        {
          key: 1,
          name: '酷我音乐-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '酷我音乐-2',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
      ],
    },
    {
      id: 'com.UCMobile',
      name: 'UC浏览器',
      groups: [
        {
          key: 1,
          name: 'UC浏览器-1',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
      ],
    },
    {
      id: 'com.lphtsccft',
      name: '涨乐财富通',
      groups: [
        {
          key: 1,
          name: '涨乐财富通-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '涨乐财富通-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="home_float_close"||desc*="home_float_close"||id*="home_float_close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '涨乐财富通-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="tv_never"||desc*="tv_never"||id*="tv_never")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.moji.mjweather',
      name: '墨迹天气',
      groups: [
        {
          key: 1,
          name: '墨迹天气-1',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 2,
          name: '墨迹天气-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.job.android',
      name: '前程无忧51Job',
      groups: [
        {
          key: 1,
          name: '前程无忧51Job-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cn.xiaochuankeji.zuiyouLite',
      name: '皮皮搞笑',
      groups: [
        {
          key: 1,
          name: '皮皮搞笑-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '皮皮搞笑-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="scratch_close_float"||desc*="scratch_close_float"||id*="scratch_close_float")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '皮皮搞笑-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="push_remind_close"||desc*="push_remind_close"||id*="push_remind_close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '皮皮搞笑-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="not_update"||desc*="not_update"||id*="not_update")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '皮皮搞笑-5',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 6,
          name: '皮皮搞笑-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_sign_in_close"||desc*="iv_sign_in_close"||id*="iv_sign_in_close")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '皮皮搞笑-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="image_close"||desc*="image_close"||id*="image_close")]',
              ],
            },
          ],
        },
        {
          key: 8,
          name: '皮皮搞笑-8',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="tedium"||desc*="tedium"||id*="tedium")]',
              ],
            },
          ],
        },
        {
          key: 9,
          name: '皮皮搞笑-9',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不喜欢广告主"||desc*="不喜欢广告主"||id*="不喜欢广告主")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.zhihu.android',
      name: '知乎',
      groups: [
        {
          key: 1,
          name: '知乎-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="×"||desc*="×"||id*="×")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '知乎-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="dismiss"||desc*="dismiss"||id*="dismiss")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.yipiao',
      name: '智行火车票',
      groups: [
        {
          key: 1,
          name: '智行火车票-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="arg"||desc*="arg"||id*="arg")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '智行火车票-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="arg"||desc*="arg"||id*="arg")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '智行火车票-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="狠心放弃"||desc*="狠心放弃"||id*="狠心放弃")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '智行火车票-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="arg"||desc*="arg"||id*="arg")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '智行火车票-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="arg"||desc*="arg"||id*="arg")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.henzanapp.miaomiaozhe',
      name: '喵喵折',
      groups: [
        {
          key: 1,
          name: '喵喵折-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.alibaba.wireless',
      name: '阿里巴巴',
      groups: [
        {
          key: 1,
          name: '阿里巴巴-1',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
      ],
    },
    {
      id: 'com.xiaomi.gamecenter',
      name: '小米游戏中心',
      groups: [
        {
          key: 1,
          name: '小米游戏中心-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.hundsun.winner.pazq',
      name: '平安证券',
      groups: [
        {
          key: 1,
          name: '平安证券-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="not_open_notify"||desc*="not_open_notify"||id*="not_open_notify")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.lolaage.tbulu.tools',
      name: '两步路户外助手',
      groups: [
        {
          key: 1,
          name: '两步路户外助手-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消授权"||desc*="取消授权"||id*="取消授权")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '两步路户外助手-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivClose"||desc*="ivClose"||id*="ivClose")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.taobao.taobao',
      name: '淘宝',
      groups: [
        {
          key: 1,
          name: '淘宝-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="浮层关闭按钮"||desc*="浮层关闭按钮"||id*="浮层关闭按钮")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '淘宝-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭按钮"||desc*="关闭按钮"||id*="关闭按钮")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '淘宝-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭按钮"||desc*="关闭按钮"||id*="关闭按钮")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.wemeet.app',
      name: '腾讯会议',
      groups: [
        {
          key: 1,
          name: '腾讯会议-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="稍后再说"||desc*="稍后再说"||id*="稍后再说")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '腾讯会议-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="bud"||desc*="bud"||id*="bud")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.nowcasting.activity',
      name: '彩云天气',
      groups: [
        {
          key: 1,
          name: '彩云天气-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_bt"||desc*="close_bt"||id*="close_bt")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '彩云天气-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="icon_close_button"||desc*="icon_close_button"||id*="icon_close_button")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '彩云天气-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '彩云天气-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_button"||desc*="close_button"||id*="close_button")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.hexin.plat.android',
      name: '同花顺',
      groups: [
        {
          key: 1,
          name: '同花顺-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="closeBt"||desc*="closeBt"||id*="closeBt")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.baidu.wenku',
      name: '百度文库',
      groups: [
        {
          key: 1,
          name: '百度文库-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '百度文库-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="再考虑下"||desc*="再考虑下"||id*="再考虑下")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '百度文库-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="score_close"||desc*="score_close"||id*="score_close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '百度文库-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '百度文库-5',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 6,
          name: '百度文库-6',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 7,
          name: '百度文库-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="act_style_iv_close"||desc*="act_style_iv_close"||id*="act_style_iv_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.jingyao.easybike',
      name: '哈啰',
      groups: [
        {
          key: 1,
          name: '哈啰-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="actionDialogClose"||desc*="actionDialogClose"||id*="actionDialogClose")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '哈啰-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="actionDialogClose"||desc*="actionDialogClose"||id*="actionDialogClose")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '哈啰-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="gENrrooPRRSKS2nmR644j"||desc*="gENrrooPRRSKS2nmR644j"||id*="gENrrooPRRSKS2nmR644j")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '哈啰-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="OcAed8BaQIDrlsAAAAASUVORK5CYII="||desc*="OcAed8BaQIDrlsAAAAASUVORK5CYII="||id*="OcAed8BaQIDrlsAAAAASUVORK5CYII=")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'android.zhibo8',
      name: '直播吧',
      groups: [
        {
          key: 1,
          name: '直播吧-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_cancel"||desc*="iv_cancel"||id*="iv_cancel")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '直播吧-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不开启"||desc*="暂不开启"||id*="暂不开启")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '直播吧-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.ss.android.article.news',
      name: '今日头条',
      groups: [
        {
          key: 1,
          name: '今日头条-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="blb"||desc*="blb"||id*="blb")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '今日头条-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '今日头条-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="拒绝"||desc*="拒绝"||id*="拒绝")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.quark.browser',
      name: '夸克',
      groups: [
        {
          key: 1,
          name: '夸克-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'me.ele',
      name: '饿了么',
      groups: [
        {
          key: 1,
          name: '饿了么-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="放弃福利"||desc*="放弃福利"||id*="放弃福利")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '饿了么-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_cancel"||desc*="iv_cancel"||id*="iv_cancel")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '饿了么-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="buttonDefaultNegative"||desc*="buttonDefaultNegative"||id*="buttonDefaultNegative")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.kuaishou.nebula',
      name: '快手极速版',
      groups: [
        {
          key: 1,
          name: '快手极速版-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '快手极速版-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.anjuke.android.app',
      name: '安居客',
      groups: [
        {
          key: 1,
          name: '安居客-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_image_view"||desc*="close_image_view"||id*="close_image_view")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '安居客-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="location_tip_close"||desc*="location_tip_close"||id*="location_tip_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.baidu.netdisk',
      name: '百度网盘',
      groups: [
        {
          key: 1,
          name: '百度网盘-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="下次再说"||desc*="下次再说"||id*="下次再说")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '百度网盘-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="dialog_cancel"||desc*="dialog_cancel"||id*="dialog_cancel")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '百度网盘-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="banner_item_close"||desc*="banner_item_close"||id*="banner_item_close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '百度网盘-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '百度网盘-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_clean_guide"||desc*="close_clean_guide"||id*="close_clean_guide")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '百度网盘-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_notification_tip"||desc*="close_notification_tip"||id*="close_notification_tip")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '百度网盘-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_yike_close"||desc*="iv_yike_close"||id*="iv_yike_close")]',
              ],
            },
          ],
        },
        {
          key: 8,
          name: '百度网盘-8',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="yike_guide_exit"||desc*="yike_guide_exit"||id*="yike_guide_exit")]',
              ],
            },
          ],
        },
        {
          key: 9,
          name: '百度网盘-9',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.hpbr.bosszhipin',
      name: 'BOSS直聘',
      groups: [
        {
          key: 1,
          name: 'BOSS直聘-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'BOSS直聘-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="还是算了"||desc*="还是算了"||id*="还是算了")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.achievo.vipshop',
      name: '唯品会',
      groups: [
        {
          key: 1,
          name: '唯品会-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.luna.music',
      name: '汽水音乐',
      groups: [
        {
          key: 1,
          name: '汽水音乐-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="playing_ic_close"||desc*="playing_ic_close"||id*="playing_ic_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.baidu.baike',
      name: '百度百科',
      groups: [
        {
          key: 1,
          name: '百度百科-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不允许"||desc*="不允许"||id*="不允许")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.xunmeng.pinduoduo',
      name: '拼多多',
      groups: [
        {
          key: 1,
          name: '拼多多-1',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 2,
          name: '拼多多-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '拼多多-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭弹窗"||desc*="关闭弹窗"||id*="关闭弹窗")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '拼多多-4',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 5,
          name: '拼多多-5',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 6,
          name: '拼多多-6',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 7,
          name: '拼多多-7',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
      ],
    },
    {
      id: 'com.miui.player',
      name: '小米音乐',
      groups: [
        {
          key: 1,
          name: '小米音乐-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭弹框按钮"||desc*="关闭弹框按钮"||id*="关闭弹框按钮")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.xunlei.downloadprovider',
      name: '迅雷',
      groups: [
        {
          key: 1,
          name: '迅雷-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '迅雷-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="touch_bottom_bar_bubble_close_iv"||desc*="touch_bottom_bar_bubble_close_iv"||id*="touch_bottom_bar_bubble_close_iv")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '迅雷-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="touch_dlg_close_iv"||desc*="touch_dlg_close_iv"||id*="touch_dlg_close_iv")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '迅雷-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '迅雷-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="放弃支付"||desc*="放弃支付"||id*="放弃支付")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '迅雷-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="放弃优惠"||desc*="放弃优惠"||id*="放弃优惠")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '迅雷-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="xl_download_guide_tip_close"||desc*="xl_download_guide_tip_close"||id*="xl_download_guide_tip_close")]',
              ],
            },
          ],
        },
        {
          key: 8,
          name: '迅雷-8',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close-circle"||desc*="close-circle"||id*="close-circle")]',
              ],
            },
          ],
        },
        {
          key: 9,
          name: '迅雷-9',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="知道了"||desc*="知道了"||id*="知道了")]',
              ],
            },
          ],
        },
        {
          key: 10,
          name: '迅雷-10',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_notification_tips_close"||desc*="iv_notification_tips_close"||id*="iv_notification_tips_close")]',
              ],
            },
          ],
        },
        {
          key: 11,
          name: '迅雷-11',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 12,
          name: '迅雷-12',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="hermes_ad_banner_negative"||desc*="hermes_ad_banner_negative"||id*="hermes_ad_banner_negative")]',
              ],
            },
          ],
        },
        {
          key: 13,
          name: '迅雷-13',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不感兴趣"||desc*="不感兴趣"||id*="不感兴趣")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tmall.wireless',
      name: '手机天猫',
      groups: [
        {
          key: 1,
          name: '手机天猫-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="tm_ad_page_tips_close"||desc*="tm_ad_page_tips_close"||id*="tm_ad_page_tips_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.excean.na',
      name: '99手游加速器',
      groups: [
        {
          key: 1,
          name: '99手游加速器-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_render_ad"||desc*="close_render_ad"||id*="close_render_ad")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.gotokeep.keep',
      name: 'Keep',
      groups: [
        {
          key: 1,
          name: 'Keep-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'Keep-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="imgCloseHomePageDialog"||desc*="imgCloseHomePageDialog"||id*="imgCloseHomePageDialog")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: 'Keep-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不需要"||desc*="暂不需要"||id*="暂不需要")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.yitong.mbank.psbc',
      name: '邮储银行',
      groups: [
        {
          key: 1,
          name: '邮储银行-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.zhaopin.social',
      name: '智联招聘',
      groups: [
        {
          key: 1,
          name: '智联招聘-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="rl_banner_close"||desc*="rl_banner_close"||id*="rl_banner_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '智联招聘-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_ignore"||desc*="iv_ignore"||id*="iv_ignore")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '智联招聘-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivHomeIndexItemNearbyClose"||desc*="ivHomeIndexItemNearbyClose"||id*="ivHomeIndexItemNearbyClose")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.rarlab.rar',
      name: 'RAR',
      groups: [
        {
          key: 1,
          name: 'RAR-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="放弃"||desc*="放弃"||id*="放弃")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.chinamobile.mcloud',
      name: '中国移动云盘',
      groups: [
        {
          key: 1,
          name: '中国移动云盘-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="bn_cancel"||desc*="bn_cancel"||id*="bn_cancel")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '中国移动云盘-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不要福利"||desc*="不要福利"||id*="不要福利")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '中国移动云盘-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '中国移动云盘-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '中国移动云盘-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_home_delete"||desc*="iv_home_delete"||id*="iv_home_delete")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '中国移动云盘-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不需要"||desc*="暂不需要"||id*="暂不需要")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '中国移动云盘-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_iv"||desc*="close_iv"||id*="close_iv")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.wuba.zhuanzhuan',
      name: '转转',
      groups: [
        {
          key: 1,
          name: '转转-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ezz"||desc*="ezz"||id*="ezz")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '转转-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ba3"||desc*="ba3"||id*="ba3")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '转转-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ba9"||desc*="ba9"||id*="ba9")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '转转-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="dqp"||desc*="dqp"||id*="dqp")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '转转-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ba5"||desc*="ba5"||id*="ba5")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '转转-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="知道了"||desc*="知道了"||id*="知道了")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.qidian.QDReader',
      name: '起点读书',
      groups: [
        {
          key: 1,
          name: '起点读书-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '起点读书-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="closeBtn"||desc*="closeBtn"||id*="closeBtn")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '起点读书-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivClose"||desc*="ivClose"||id*="ivClose")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '起点读书-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivClose"||desc*="ivClose"||id*="ivClose")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '起点读书-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivAdClose"||desc*="ivAdClose"||id*="ivAdClose")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '起点读书-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="imgClose"||desc*="imgClose"||id*="imgClose")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '起点读书-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivClose"||desc*="ivClose"||id*="ivClose")]',
              ],
            },
          ],
        },
        {
          key: 8,
          name: '起点读书-8',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="fClose"||desc*="fClose"||id*="fClose")]',
              ],
            },
          ],
        },
        {
          key: 9,
          name: '起点读书-9',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="fClose"||desc*="fClose"||id*="fClose")]',
              ],
            },
          ],
        },
        {
          key: 10,
          name: '起点读书-10',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="newAudioDialogNoPicCloseBtn"||desc*="newAudioDialogNoPicCloseBtn"||id*="newAudioDialogNoPicCloseBtn")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.dragon.read',
      name: '番茄免费小说',
      groups: [
        {
          key: 1,
          name: '番茄免费小说-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="f"||desc*="f"||id*="f")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '番茄免费小说-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="buo"||desc*="buo"||id*="buo")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '番茄免费小说-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="c56"||desc*="c56"||id*="c56")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cn.xiaochuankeji.tieba',
      name: '最右',
      groups: [
        {
          key: 1,
          name: '最右-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不开启"||desc*="暂不开启"||id*="暂不开启")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '最右-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_delete"||desc*="iv_delete"||id*="iv_delete")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '最右-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="tips_close"||desc*="tips_close"||id*="tips_close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '最右-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="btn_close"||desc*="btn_close"||id*="btn_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.shizhuang.duapp',
      name: '得物',
      groups: [
        {
          key: 1,
          name: '得物-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivClose"||desc*="ivClose"||id*="ivClose")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '得物-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '得物-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivBottomFloatViewClose"||desc*="ivBottomFloatViewClose"||id*="ivBottomFloatViewClose")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '得物-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="放弃领取"||desc*="放弃领取"||id*="放弃领取")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '得物-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivRemove"||desc*="ivRemove"||id*="ivRemove")]',
              ],
              actionMaximum: 5,
            },
          ],
        },
        {
          key: 6,
          name: '得物-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="closeIcon"||desc*="closeIcon"||id*="closeIcon")]',
              ],
            },
          ],
        },
        {
          key: 7,
          name: '得物-7',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivClose"||desc*="ivClose"||id*="ivClose")]',
              ],
            },
          ],
        },
        {
          key: 8,
          name: '得物-8',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivClose"||desc*="ivClose"||id*="ivClose")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.youku.phone',
      name: '优酷视频',
      groups: [
        {
          key: 1,
          name: '优酷视频-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="novel_banner_ad_close"||desc*="novel_banner_ad_close"||id*="novel_banner_ad_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '优酷视频-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭弹层"||desc*="关闭弹层"||id*="关闭弹层")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.huawei.appmarket',
      name: '华为应用市场',
      groups: [
        {
          key: 1,
          name: '华为应用市场-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="以后再说"||desc*="以后再说"||id*="以后再说")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '华为应用市场-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="知道了"||desc*="知道了"||id*="知道了")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '华为应用市场-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="以后再说"||desc*="以后再说"||id*="以后再说")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.mtt',
      name: 'QQ浏览器',
      groups: [
        {
          key: 1,
          name: 'QQ浏览器-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'QQ浏览器-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="忽略"||desc*="忽略"||id*="忽略")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cn.soulapp.android',
      name: 'Soul',
      groups: [
        {
          key: 1,
          name: 'Soul-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="img_close"||desc*="img_close"||id*="img_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'Soul-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="知道了"||desc*="知道了"||id*="知道了")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: 'Soul-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭弹窗"||desc*="关闭弹窗"||id*="关闭弹窗")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.cnspeedtest.globalspeed',
      name: '全球网测',
      groups: [
        {
          key: 1,
          name: '全球网测-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="vision_btn_cancel"||desc*="vision_btn_cancel"||id*="vision_btn_cancel")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.sohu.sohuvideo',
      name: '搜狐视频',
      groups: [
        {
          key: 1,
          name: '搜狐视频-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.cmcc.cmvideo',
      name: '咪咕视频',
      groups: [
        {
          key: 1,
          name: '咪咕视频-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '咪咕视频-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_right_bottom_close"||desc*="iv_right_bottom_close"||id*="iv_right_bottom_close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '咪咕视频-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_big_close"||desc*="iv_big_close"||id*="iv_big_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.guwendao.gwd',
      name: '古文岛',
      groups: [
        {
          key: 1,
          name: '古文岛-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '古文岛-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.sinyee.babybus.recommendapp',
      name: '宝宝巴士',
      groups: [
        {
          key: 1,
          name: '宝宝巴士-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.jin10',
      name: '金十数据',
      groups: [
        {
          key: 1,
          name: '金十数据-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="update_cancel"||desc*="update_cancel"||id*="update_cancel")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '金十数据-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '金十数据-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="img_ad_close"||desc*="img_ad_close"||id*="img_ad_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.google.android.documentsui',
      name: 'Android 系统文件选择器',
      groups: [
        {
          key: 1,
          name: 'Android 系统文件选择器-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="使用此文件夹"||desc*="使用此文件夹"||id*="使用此文件夹")]',
              ],
            },
            {
              key: 1,
              matches: [
                '[(text*="允许"||desc*="允许"||id*="允许")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.facetech.konking',
      name: '人民日报',
      groups: [
        {
          key: 1,
          name: '人民日报-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.qqmusic',
      name: 'QQ音乐',
      groups: [
        {
          key: 1,
          name: 'QQ音乐-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不再提醒"||desc*="不再提醒"||id*="不再提醒")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'QQ音乐-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不再提醒"||desc*="不再提醒"||id*="不再提醒")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: 'QQ音乐-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭,按钮"||desc*="关闭,按钮"||id*="关闭,按钮")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: 'QQ音乐-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭新特性弹窗"||desc*="关闭新特性弹窗"||id*="关闭新特性弹窗")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: 'QQ音乐-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭按钮"||desc*="关闭按钮"||id*="关闭按钮")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.android.bankabc',
      name: '中国农业银行',
      groups: [
        {
          key: 1,
          name: '中国农业银行-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '中国农业银行-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="残忍拒绝"||desc*="残忍拒绝"||id*="残忍拒绝")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '中国农业银行-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '中国农业银行-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_notification_reminder_dialog_close"||desc*="iv_notification_reminder_dialog_close"||id*="iv_notification_reminder_dialog_close")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '中国农业银行-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_skip"||desc*="iv_skip"||id*="iv_skip")]',
              ],
            },
          ],
        },
        {
          key: 6,
          name: '中国农业银行-6',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂时不了"||desc*="暂时不了"||id*="暂时不了")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cmb.pb',
      name: '招商银行',
      groups: [
        {
          key: 1,
          name: '招商银行-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '招商银行-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.sdu.didi.psnger',
      name: '滴滴',
      groups: [
        {
          key: 1,
          name: '滴滴-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_upgrade_btn_ignore"||desc*="iv_upgrade_btn_ignore"||id*="iv_upgrade_btn_ignore")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '滴滴-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭弹窗"||desc*="关闭弹窗"||id*="关闭弹窗")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '滴滴-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不允许"||desc*="不允许"||id*="不允许")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '滴滴-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="im_feed_tip_close"||desc*="im_feed_tip_close"||id*="im_feed_tip_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.qqlive',
      name: '腾讯视频',
      groups: [
        {
          key: 1,
          name: '腾讯视频-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不升级"||desc*="暂不升级"||id*="暂不升级")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '腾讯视频-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="以后再说"||desc*="以后再说"||id*="以后再说")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.cmcc.hebao',
      name: '和包',
      groups: [
        {
          key: 1,
          name: '和包-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="返回首页"||desc*="返回首页"||id*="返回首页")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '和包-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不允许"||desc*="不允许"||id*="不允许")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.wework',
      name: '企业微信',
      groups: [
        {
          key: 1,
          name: '企业微信-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.baidu.BaiduMap',
      name: '百度地图',
      groups: [
        {
          key: 1,
          name: '百度地图-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="cancel_update"||desc*="cancel_update"||id*="cancel_update")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '百度地图-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="yellow_banner_close"||desc*="yellow_banner_close"||id*="yellow_banner_close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '百度地图-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '百度地图-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="operational_activities_content_close"||desc*="operational_activities_content_close"||id*="operational_activities_content_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.unionpay',
      name: '云闪付',
      groups: [
        {
          key: 1,
          name: '云闪付-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="locate_iv_close"||desc*="locate_iv_close"||id*="locate_iv_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '云闪付-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '云闪付-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.qqpimsecure',
      name: '腾讯手机管家',
      groups: [
        {
          key: 1,
          name: '腾讯手机管家-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="skip_time_change_tv"||desc*="skip_time_change_tv"||id*="skip_time_change_tv")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.xiaomi.hm.health',
      name: 'Zepp Life',
      groups: [
        {
          key: 1,
          name: 'Zepp Life-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不升级"||desc*="暂不升级"||id*="暂不升级")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.ct.client',
      name: '中国电信',
      groups: [
        {
          key: 1,
          name: '中国电信-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="拒绝"||desc*="拒绝"||id*="拒绝")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '中国电信-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="关闭"||desc="关闭"||id="关闭")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '中国电信-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.xiaomi.vipaccount',
      name: '小米社区',
      groups: [
        {
          key: 1,
          name: '小米社区-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '小米社区-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="closeGray"||desc*="closeGray"||id*="closeGray")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.map',
      name: '腾讯地图',
      groups: [
        {
          key: 1,
          name: '腾讯地图-1',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 2,
          name: '腾讯地图-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '腾讯地图-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="关闭按钮"||desc="关闭按钮"||id="关闭按钮")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.dongqiudi.news',
      name: '懂球帝',
      groups: [
        {
          key: 1,
          name: '懂球帝-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="下次提醒"||desc*="下次提醒"||id*="下次提醒")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '懂球帝-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '懂球帝-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="feedback_close"||desc*="feedback_close"||id*="feedback_close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '懂球帝-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="诱导点击"||desc*="诱导点击"||id*="诱导点击")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '懂球帝-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="feedback_close"||desc*="feedback_close"||id*="feedback_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cn.etouch.ecalendar',
      name: '中华万年历日历',
      groups: [
        {
          key: 1,
          name: '中华万年历日历-1',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 2,
          name: '中华万年历日历-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="notice_close_txt"||desc*="notice_close_txt"||id*="notice_close_txt")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'fm.qingting.qtradio',
      name: '蜻蜓FM',
      groups: [
        {
          key: 1,
          name: '蜻蜓FM-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="view_ad_close"||desc*="view_ad_close"||id*="view_ad_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.autonavi.minimap',
      name: '高德地图',
      groups: [
        {
          key: 1,
          name: '高德地图-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '高德地图-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '高德地图-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="msgbox_popup_clear"||desc*="msgbox_popup_clear"||id*="msgbox_popup_clear")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.news',
      name: '腾讯新闻',
      groups: [
        {
          key: 1,
          name: '腾讯新闻-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '腾讯新闻-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '腾讯新闻-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ad_feedback_dots"||desc*="ad_feedback_dots"||id*="ad_feedback_dots")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '腾讯新闻-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不感兴趣"||desc*="不感兴趣"||id*="不感兴趣")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.lbe.security.miui',
      name: '权限管理服务',
      groups: [
        {
          key: 1,
          name: '权限管理服务-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="始终拒绝"||desc*="始终拒绝"||id*="始终拒绝")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cn.ccspeed',
      name: 'CC加速器',
      groups: [
        {
          key: 1,
          name: 'CC加速器-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="dlg_iv_login_guide_close"||desc*="dlg_iv_login_guide_close"||id*="dlg_iv_login_guide_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bin.mt.plus',
      name: 'MT管理器',
      groups: [
        {
          key: 1,
          name: 'MT管理器-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text="取消"||desc="取消"||id="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.qq.reader',
      name: 'QQ阅读',
      groups: [
        {
          key: 1,
          name: 'QQ阅读-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'QQ阅读-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="operating_activity_close"||desc*="operating_activity_close"||id*="operating_activity_close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: 'QQ阅读-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: 'QQ阅读-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_im"||desc*="close_im"||id*="close_im")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.android.vending',
      name: 'Google Play 商店',
      groups: [
        {
          key: 1,
          name: 'Google Play 商店-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="以后再说"||desc*="以后再说"||id*="以后再说")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.cctv.yangshipin.app.androidp',
      name: '央视频',
      groups: [
        {
          key: 1,
          name: '央视频-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="再想想"||desc*="再想想"||id*="再想想")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '央视频-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="lottery_popup_view_close"||desc*="lottery_popup_view_close"||id*="lottery_popup_view_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tv.danmaku.bili',
      name: '哔哩哔哩',
      groups: [
        {
          key: 1,
          name: '哔哩哔哩-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.One.WoodenLetter',
      name: '一个木函',
      groups: [
        {
          key: 1,
          name: '一个木函-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="忽略"||desc*="忽略"||id*="忽略")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.zjwh.android_wh_physicalfitness',
      name: '运动世界校园',
      groups: [
        {
          key: 1,
          name: '运动世界校园-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '运动世界校园-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_cancel"||desc*="iv_cancel"||id*="iv_cancel")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.baidu.homework',
      name: '作业帮',
      groups: [
        {
          key: 1,
          name: '作业帮-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="已满14岁"||desc*="已满14岁"||id*="已满14岁")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '作业帮-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_img"||desc*="close_img"||id*="close_img")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.mihoyo.hyperion',
      name: '米游社',
      groups: [
        {
          key: 1,
          name: '米游社-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="mUpgradeDialogCancel"||desc*="mUpgradeDialogCancel"||id*="mUpgradeDialogCancel")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '米游社-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '米游社-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="closeIv"||desc*="closeIv"||id*="closeIv")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.eg.android.AlipayGphone',
      name: '支付宝',
      groups: [
        {
          key: 1,
          name: '支付宝-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="closeButtonIcon"||desc*="closeButtonIcon"||id*="closeButtonIcon")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '支付宝-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cn.wps.yun',
      name: '金山文档',
      groups: [
        {
          key: 1,
          name: '金山文档-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="cancel"||desc*="cancel"||id*="cancel")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '金山文档-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.taobao.live',
      name: '点淘',
      groups: [
        {
          key: 1,
          name: '点淘-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '点淘-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_notification_bar"||desc*="close_notification_bar"||id*="close_notification_bar")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '点淘-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_btn"||desc*="close_btn"||id*="close_btn")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.jd.jrapp',
      name: '京东金融',
      groups: [
        {
          key: 1,
          name: '京东金融-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_page_suspend_close"||desc*="iv_page_suspend_close"||id*="iv_page_suspend_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.smile.gifmaker',
      name: '快手',
      groups: [
        {
          key: 1,
          name: '快手-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="reminder_push_guide_close"||desc*="reminder_push_guide_close"||id*="reminder_push_guide_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '快手-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="关闭"||desc*="关闭"||id*="关闭")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.jdd.motorfans',
      name: '摩托范',
      groups: [
        {
          key: 1,
          name: '摩托范-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.sgcc.evs.echarge',
      name: 'e充电',
      groups: [
        {
          key: 1,
          name: 'e充电-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'e充电-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_ad_close"||desc*="iv_ad_close"||id*="iv_ad_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.kugou.android',
      name: '酷狗音乐',
      groups: [
        {
          key: 1,
          name: '酷狗音乐-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="知道了"||desc*="知道了"||id*="知道了")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.alibaba.android.rimet',
      name: '钉钉',
      groups: [
        {
          key: 1,
          name: '钉钉-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="icft_close"||desc*="icft_close"||id*="icft_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.xyhui',
      name: 'PU口袋校园',
      groups: [
        {
          key: 1,
          name: 'PU口袋校园-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ams_icon_single_close"||desc*="ams_icon_single_close"||id*="ams_icon_single_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.tencent.karaoke',
      name: '全民K歌',
      groups: [
        {
          key: 1,
          name: '全民K歌-1',
          rules: [
            {
              key: 0,
              matches: [],
              action: 'back',
            },
          ],
        },
        {
          key: 2,
          name: '全民K歌-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="enu"||desc*="enu"||id*="enu")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '全民K歌-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="apt"||desc*="apt"||id*="apt")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.taptap',
      name: 'TapTap',
      groups: [
        {
          key: 1,
          name: 'TapTap-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="btn_dismiss"||desc*="btn_dismiss"||id*="btn_dismiss")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'TapTap-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: 'TapTap-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close_icon"||desc*="iv_close_icon"||id*="iv_close_icon")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.woapp.hebei',
      name: '联通智家',
      groups: [
        {
          key: 1,
          name: '联通智家-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.xueqiu.android',
      name: '雪球',
      groups: [
        {
          key: 1,
          name: '雪球-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="image_cancel"||desc*="image_cancel"||id*="image_cancel")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '雪球-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ib_close"||desc*="ib_close"||id*="ib_close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.jym.mall',
      name: '交易猫',
      groups: [
        {
          key: 1,
          name: '交易猫-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="下次再说"||desc*="下次再说"||id*="下次再说")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '交易猫-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '交易猫-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ivClose"||desc*="ivClose"||id*="ivClose")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cn.missevan',
      name: '猫耳FM',
      groups: [
        {
          key: 1,
          name: '猫耳FM-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="umeng_update_id_cancel"||desc*="umeng_update_id_cancel"||id*="umeng_update_id_cancel")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '猫耳FM-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="我知道了"||desc*="我知道了"||id*="我知道了")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.intsig.camscanner',
      name: '扫描全能王',
      groups: [
        {
          key: 1,
          name: '扫描全能王-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_drop_cnl_close"||desc*="iv_drop_cnl_close"||id*="iv_drop_cnl_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '扫描全能王-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="稍后再说"||desc*="稍后再说"||id*="稍后再说")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.weaver.emobile7',
      name: 'EMobile7',
      groups: [
        {
          key: 1,
          name: 'EMobile7-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.estrongs.android.pop',
      name: 'ES文件浏览器',
      groups: [
        {
          key: 1,
          name: 'ES文件浏览器-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_close"||desc*="iv_close"||id*="iv_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: 'ES文件浏览器-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: 'ES文件浏览器-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close"||desc*="close"||id*="close")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.snda.wifilocating',
      name: 'WiFi万能钥匙',
      groups: [
        {
          key: 1,
          name: 'WiFi万能钥匙-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="iv_delete"||desc*="iv_delete"||id*="iv_delete")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.douban.frodo',
      name: '豆瓣',
      groups: [
        {
          key: 1,
          name: '豆瓣-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="取消"||desc*="取消"||id*="取消")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '豆瓣-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="ad_not_interest"||desc*="ad_not_interest"||id*="ad_not_interest")]',
              ],
            },
          ],
        },
        {
          key: 3,
          name: '豆瓣-3',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不感兴趣"||desc*="不感兴趣"||id*="不感兴趣")]',
              ],
            },
          ],
        },
        {
          key: 4,
          name: '豆瓣-4',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="close_tip"||desc*="close_tip"||id*="close_tip")]',
              ],
            },
          ],
        },
        {
          key: 5,
          name: '豆瓣-5',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="menu_item"||desc*="menu_item"||id*="menu_item")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.ecitic.bank.mobile',
      name: '中信银行',
      groups: [
        {
          key: 1,
          name: '中信银行-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="暂不更新"||desc*="暂不更新"||id*="暂不更新")]',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'com.whty.wicity.china',
      name: '和生活',
      groups: [
        {
          key: 1,
          name: '和生活-1',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="img_close"||desc*="img_close"||id*="img_close")]',
              ],
            },
          ],
        },
        {
          key: 2,
          name: '和生活-2',
          rules: [
            {
              key: 0,
              matches: [
                '[(text*="不允许"||desc*="不允许"||id*="不允许")]',
              ],
            },
          ],
        },
      ],
    },
  ],
});
