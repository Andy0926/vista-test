(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"horizontalAlign":"left","backgroundOpacity":1,"defaultVRPointer":"laser","scrollBarVisible":"rollOver","mobileMipmappingEnabled":false,"children":["this.MainViewer"],"verticalAlign":"top","overflow":"hidden","width":"100%","class":"Player","id":"rootPlayer","mouseWheelEnabled":true,"contentOpaque":false,"paddingLeft":0,"definitions": [{"automaticZoomSpeed":10,"initialSequence":"this.sequence_CF5519CC_C551_18AD_41DA_67758FFDDC25","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5_camera"},{"automaticZoomSpeed":10,"initialPosition":{"yaw":88.06,"class":"PanoramaCameraPosition","pitch":-2.37},"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF_camera"},{"automaticZoomSpeed":10,"initialPosition":{"yaw":88.44,"class":"PanoramaCameraPosition","pitch":-7.03},"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5_camera"},{"partial":false,"id":"panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078","hfov":360,"vfov":180,"class":"Panorama","adjacentPanoramas":[{"panorama":"this.panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12","distance":1.6,"yaw":92.92,"backwardYaw":-86.11,"select":"this.overlay_CA25F442_C571_0F95_41D3_43C4CF3BE6C1.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CA25F442_C571_0F95_41D3_43C4CF3BE6C1"},"class":"AdjacentPanorama"}],"label":trans('panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078.label'),"thumbnailUrl":"media/panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078_t.jpg","pitch":0,"hfovMax":130,"data":{"label":"05"},"hfovMin":"120%","frames":[{"thumbnailUrl":"media/panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":18432,"colCount":36,"url":"media/panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078_0/{face}/0/{row}_{column}.jpg","height":3072,"rowCount":6,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":9216,"colCount":18,"url":"media/panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078_0/{face}/1/{row}_{column}.jpg","height":1536,"rowCount":3,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":6144,"colCount":12,"url":"media/panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078_0/{face}/2/{row}_{column}.jpg","height":1024,"rowCount":2,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"width":3072,"colCount":6,"url":"media/panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078_0/{face}/3/{row}_{column}.jpg","height":512,"rowCount":1,"class":"TiledImageResourceLevel"},{"tags":"mobilevr2gen","width":12288,"colCount":6,"url":"media/panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078_0/{face}/vr2gen/0.jpg","height":2048,"rowCount":1,"class":"TiledImageResourceLevel"}]}}],"overlays":["this.overlay_CA25F442_C571_0F95_41D3_43C4CF3BE6C1"]},{"automaticZoomSpeed":10,"initialSequence":"this.sequence_CF54F9CC_C551_18AD_41D5_7E0F5DC0A20C","initialPosition":{"yaw":83.9,"class":"PanoramaCameraPosition","pitch":-8.96},"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078_camera"},{"automaticZoomSpeed":10,"initialPosition":{"yaw":90.99,"class":"PanoramaCameraPosition","pitch":2},"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_camera"},{"displayPlaybackBar":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer"},{"automaticZoomSpeed":10,"initialPosition":{"yaw":-6.87,"class":"PanoramaCameraPosition","pitch":-8.62},"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12_camera"},{"partial":false,"id":"panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF","hfov":360,"vfov":180,"class":"Panorama","adjacentPanoramas":[{"panorama":"this.panorama_CE8CE039_C54F_07F7_41E8_7B7431916118","distance":7.8,"yaw":-114.66,"backwardYaw":95.68,"select":"this.overlay_CB2A9A3D_C551_1BEC_41E2_456195A35C45.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CB2A9A3D_C551_1BEC_41E2_456195A35C45"},"class":"AdjacentPanorama"},{"panorama":"this.panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5","distance":4.4,"yaw":97.44,"backwardYaw":-109.86,"select":"this.overlay_CB27FE75_C571_187C_41C7_17A2A94E7AA6.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CB27FE75_C571_187C_41C7_17A2A94E7AA6"},"class":"AdjacentPanorama"}],"label":trans('panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF.label'),"thumbnailUrl":"media/panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF_t.jpg","pitch":0,"hfovMax":130,"data":{"label":"02"},"hfovMin":"120%","frames":[{"thumbnailUrl":"media/panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":18432,"colCount":36,"url":"media/panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF_0/{face}/0/{row}_{column}.jpg","height":3072,"rowCount":6,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":9216,"colCount":18,"url":"media/panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF_0/{face}/1/{row}_{column}.jpg","height":1536,"rowCount":3,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":6144,"colCount":12,"url":"media/panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF_0/{face}/2/{row}_{column}.jpg","height":1024,"rowCount":2,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"width":3072,"colCount":6,"url":"media/panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF_0/{face}/3/{row}_{column}.jpg","height":512,"rowCount":1,"class":"TiledImageResourceLevel"},{"tags":"mobilevr2gen","width":12288,"colCount":6,"url":"media/panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF_0/{face}/vr2gen/0.jpg","height":2048,"rowCount":1,"class":"TiledImageResourceLevel"}]}}],"overlays":["this.overlay_CB2A9A3D_C551_1BEC_41E2_456195A35C45","this.overlay_CB27FE75_C571_187C_41C7_17A2A94E7AA6"]},{"partial":false,"id":"panorama_CE8CE039_C54F_07F7_41E8_7B7431916118","hfov":360,"vfov":180,"class":"Panorama","adjacentPanoramas":[{"panorama":"this.panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF","distance":3.16,"yaw":95.68,"backwardYaw":-114.66,"select":"this.overlay_CB312A3C_C551_1BEC_41E4_2B85F5B448AF.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CB312A3C_C551_1BEC_41E4_2B85F5B448AF"},"class":"AdjacentPanorama"}],"label":trans('panorama_CE8CE039_C54F_07F7_41E8_7B7431916118.label'),"thumbnailUrl":"media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_t.jpg","pitch":0,"hfovMax":130,"data":{"label":"01"},"hfovMin":"120%","frames":[{"thumbnailUrl":"media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":18432,"colCount":36,"url":"media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_0/{face}/0/{row}_{column}.jpg","height":3072,"rowCount":6,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":9216,"colCount":18,"url":"media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_0/{face}/1/{row}_{column}.jpg","height":1536,"rowCount":3,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":6144,"colCount":12,"url":"media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_0/{face}/2/{row}_{column}.jpg","height":1024,"rowCount":2,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"width":3072,"colCount":6,"url":"media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_0/{face}/3/{row}_{column}.jpg","height":512,"rowCount":1,"class":"TiledImageResourceLevel"},{"tags":"mobilevr2gen","width":12288,"colCount":6,"url":"media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_0/{face}/vr2gen/0.jpg","height":2048,"rowCount":1,"class":"TiledImageResourceLevel"}]}}],"overlays":["this.overlay_CB312A3C_C551_1BEC_41E4_2B85F5B448AF"]},{"partial":false,"id":"panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12","hfov":360,"vfov":180,"class":"Panorama","adjacentPanoramas":[{"panorama":"this.panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5","distance":5.11,"yaw":169.66,"backwardYaw":89.34,"select":"this.overlay_CB0E9269_C573_0B94_41B0_3D5FB995C20D.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CB0E9269_C573_0B94_41B0_3D5FB995C20D"},"class":"AdjacentPanorama"},{"panorama":"this.panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078","distance":3.56,"yaw":-86.11,"backwardYaw":92.92,"select":"this.overlay_CB4F25AD_C571_08EF_41DE_E72291BC8A00.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CB4F25AD_C571_08EF_41DE_E72291BC8A00"},"class":"AdjacentPanorama"}],"label":trans('panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12.label'),"thumbnailUrl":"media/panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12_t.jpg","pitch":0,"hfovMax":130,"data":{"label":"04"},"hfovMin":"120%","frames":[{"thumbnailUrl":"media/panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":18432,"colCount":36,"url":"media/panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12_0/{face}/0/{row}_{column}.jpg","height":3072,"rowCount":6,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":9216,"colCount":18,"url":"media/panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12_0/{face}/1/{row}_{column}.jpg","height":1536,"rowCount":3,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":6144,"colCount":12,"url":"media/panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12_0/{face}/2/{row}_{column}.jpg","height":1024,"rowCount":2,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"width":3072,"colCount":6,"url":"media/panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12_0/{face}/3/{row}_{column}.jpg","height":512,"rowCount":1,"class":"TiledImageResourceLevel"},{"tags":"mobilevr2gen","width":12288,"colCount":6,"url":"media/panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12_0/{face}/vr2gen/0.jpg","height":2048,"rowCount":1,"class":"TiledImageResourceLevel"}]}}],"overlays":["this.overlay_CB0E9269_C573_0B94_41B0_3D5FB995C20D","this.overlay_CB4F25AD_C571_08EF_41DE_E72291BC8A00"]},{"partial":false,"id":"panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5","hfov":360,"vfov":180,"class":"Panorama","adjacentPanoramas":[{"panorama":"this.panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF","distance":8.46,"yaw":-109.86,"backwardYaw":97.44,"select":"this.overlay_CB2DAE76_C571_187C_41E7_A1CB8B3F7179.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CB2DAE76_C571_187C_41E7_A1CB8B3F7179"},"class":"AdjacentPanorama"},{"panorama":"this.panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12","distance":4.21,"yaw":89.34,"backwardYaw":169.66,"select":"this.overlay_CB081268_C573_0B94_41E6_2B536DDBF312.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CB081268_C573_0B94_41E6_2B536DDBF312"},"class":"AdjacentPanorama"}],"label":trans('panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5.label'),"thumbnailUrl":"media/panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5_t.jpg","pitch":0,"hfovMax":130,"data":{"label":"03"},"hfovMin":"120%","frames":[{"thumbnailUrl":"media/panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":18432,"colCount":36,"url":"media/panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5_0/{face}/0/{row}_{column}.jpg","height":3072,"rowCount":6,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":9216,"colCount":18,"url":"media/panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5_0/{face}/1/{row}_{column}.jpg","height":1536,"rowCount":3,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":6144,"colCount":12,"url":"media/panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5_0/{face}/2/{row}_{column}.jpg","height":1024,"rowCount":2,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"width":3072,"colCount":6,"url":"media/panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5_0/{face}/3/{row}_{column}.jpg","height":512,"rowCount":1,"class":"TiledImageResourceLevel"},{"tags":"mobilevr2gen","width":12288,"colCount":6,"url":"media/panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5_0/{face}/vr2gen/0.jpg","height":2048,"rowCount":1,"class":"TiledImageResourceLevel"}]}}],"overlays":["this.overlay_CB2DAE76_C571_187C_41E7_A1CB8B3F7179","this.overlay_CB081268_C573_0B94_41E6_2B536DDBF312"]},{"items":[{"camera":"this.panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_camera","class":"PanoramaPlayListItem","media":"this.panorama_CE8CE039_C54F_07F7_41E8_7B7431916118","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF_camera","class":"PanoramaPlayListItem","media":"this.panorama_CCA460B6_C54F_08FD_41D0_AB3A030B67CF","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5_camera","class":"PanoramaPlayListItem","media":"this.panorama_CCA76920_C54F_1994_41E7_CA8CD864C3A5","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12_camera","class":"PanoramaPlayListItem","media":"this.panorama_CCA79159_C54F_09B7_4181_4BF1EBFCAA12","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078_camera","class":"PanoramaPlayListItem","media":"this.panorama_CCA73978_C54E_F875_41B2_4BE7ACAB5078","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5_camera","class":"PanoramaPlayListItem","media":"this.panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"partial":false,"vfov":180,"class":"Panorama","label":trans('panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5.label'),"hfov":360,"hfovMax":130,"hfovMin":"120%","frames":[{"thumbnailUrl":"media/panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":18432,"colCount":36,"url":"media/panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5_0/{face}/0/{row}_{column}.jpg","height":3072,"rowCount":6,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":9216,"colCount":18,"url":"media/panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5_0/{face}/1/{row}_{column}.jpg","height":1536,"rowCount":3,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":6144,"colCount":12,"url":"media/panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5_0/{face}/2/{row}_{column}.jpg","height":1024,"rowCount":2,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"width":3072,"colCount":6,"url":"media/panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5_0/{face}/3/{row}_{column}.jpg","height":512,"rowCount":1,"class":"TiledImageResourceLevel"},{"tags":"mobilevr2gen","width":12288,"colCount":6,"url":"media/panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5_0/{face}/vr2gen/0.jpg","height":2048,"rowCount":1,"class":"TiledImageResourceLevel"}]}}],"thumbnailUrl":"media/panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5_t.jpg","pitch":0,"data":{"label":"06"},"id":"panorama_CCB93196_C551_08BC_41D8_030D73C6EAA5"},{"toolTipBorderRadius":3,"subtitlesTextShadowOpacity":1,"data":{"name":"Main Viewer"},"subtitlesEnabled":true,"toolTipShadowHorizontalLength":0,"toolTipTextShadowOpacity":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColorDirection":"vertical","progressBottom":0,"surfaceReticleSelectionOpacity":1,"playbackBarBackgroundOpacity":1,"id":"MainViewer","playbackBarBackgroundColor":["#FFFFFF"],"width":"100%","toolTipShadowColor":"#333138","toolTipPaddingRight":6,"playbackBarBottom":5,"subtitlesBorderSize":0,"toolTipFontStyle":"normal","paddingLeft":0,"toolTipTextShadowBlurRadius":3,"toolTipTextShadowColor":"#000000","playbackBarHeadWidth":6,"toolTipFontColor":"#606060","paddingRight":0,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"playbackBarHeadShadowVerticalLength":0,"progressRight":0,"toolTipBorderSize":1,"playbackBarHeadBackgroundColorDirection":"vertical","progressOpacity":1,"toolTipPaddingTop":4,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"subtitlesFontColor":"#FFFFFF","playbackBarRight":0,"progressBarBorderColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorDirection":"vertical","toolTipBorderColor":"#767676","progressBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesFontWeight":"normal","toolTipFontFamily":"Arial","subtitlesTop":0,"transitionDuration":500,"subtitlesPaddingLeft":5,"toolTipFontWeight":"normal","subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","progressHeight":10,"borderSize":0,"height":"100%","toolTipPaddingLeft":6,"subtitlesPaddingBottom":5,"playbackBarHeadShadowOpacity":0.7,"progressBorderColor":"#000000","progressBarBorderRadius":0,"progressBorderSize":0,"firstTransitionDuration":0,"toolTipBackgroundColor":"#F6F6F6","paddingTop":0,"minHeight":50,"paddingBottom":0,"toolTipOpacity":1,"progressBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"subtitlesPaddingRight":5,"playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"subtitlesTextDecoration":"none","playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"playbackBarHeadShadowColor":"#000000","class":"ViewerArea","doubleClickAction":"toggle_fullscreen","subtitlesFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","transitionMode":"blending","vrPointerColor":"#FFFFFF","subtitlesBottom":50,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderRadius":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderSize":0,"playbackBarProgressOpacity":1,"subtitlesPaddingTop":5,"displayTooltipInTouchScreens":true,"playbackBarHeadShadow":true,"subtitlesShadow":false,"toolTipDisplayTime":600,"toolTipShadowOpacity":1,"toolTipShadowVerticalLength":0,"borderRadius":0,"playbackBarHeadOpacity":1,"playbackBarHeadBorderColor":"#000000","progressBackgroundColor":["#FFFFFF"],"playbackBarBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionTime":2000,"playbackBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"toolTipShadowSpread":0,"subtitlesGap":0,"toolTipHorizontalAlign":"center","toolTipShadowBlurRadius":3,"translationTransitionDuration":1000,"progressBarOpacity":1,"progressBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"subtitlesVerticalAlign":"bottom","subtitlesBackgroundColor":"#000000","subtitlesHorizontalAlign":"center","playbackBarHeadShadowHorizontalLength":0,"toolTipFontSize":"1.11vmin","progressBackgroundColorRatios":[0],"propagateClick":false,"progressBackgroundOpacity":1,"displayTooltipInSurfaceSelection":true,"surfaceReticleOpacity":0.6,"shadow":false,"surfaceReticleColor":"#FFFFFF","progressLeft":0},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_CF5519CC_C551_18AD_41DA_67758FFDDC25"},{"areas":["this.HotspotPanoramaOverlayArea_CA28B44B_C571_0FAB_41E3_0840839D8EF0"],"data":{"label":"GoTo04","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"items":[{"distance":100,"yaw":92.92,"pitch":-46.8,"data":{"label":"GoTo04"},"verticalAlign":"middle","horizontalAlign":"center","hfov":10.5,"roll":2.33,"image":"this.AnimatedImageResource_D415C871_D9E0_DF81_41E8_184C2C9E0CEC","vfov":9.45,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_CA25F442_C571_0F95_41D3_43C4CF3BE6C1"},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_CF54F9CC_C551_18AD_41D5_7E0F5DC0A20C"},{"areas":["this.HotspotPanoramaOverlayArea_CBFAE5E0_C54F_0894_41E4_78F79C1EACD6"],"data":{"label":"GoTo01","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"items":[{"distance":100,"yaw":-114.66,"pitch":-12.29,"rotationY":13.12,"data":{"label":"GoTo01"},"rotationX":-4.96,"verticalAlign":"middle","horizontalAlign":"center","hfov":5.95,"image":"this.AnimatedImageResource_D4173870_D9E0_DF9F_41DE_6C17954EE35A","vfov":6.14,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_CB2A9A3D_C551_1BEC_41E2_456195A35C45"},{"areas":["this.HotspotPanoramaOverlayArea_CB3ACE7A_C571_1874_41DC_8F64A8D7EE2D"],"data":{"label":"GoTo03","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"items":[{"distance":100,"yaw":97.44,"pitch":-21.13,"data":{"label":"GoTo03"},"verticalAlign":"middle","horizontalAlign":"center","hfov":5.38,"image":"this.AnimatedImageResource_D4170871_D9E0_DF81_41CF_2FCAE7F16F33","vfov":5.48,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_CB27FE75_C571_187C_41C7_17A2A94E7AA6"},{"areas":["this.HotspotPanoramaOverlayArea_CB24CA40_C551_1B94_41CD_13887AAA0314"],"data":{"label":"GoTo02","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"items":[{"distance":100,"yaw":95.68,"pitch":-28.28,"data":{"label":"GoTo02"},"verticalAlign":"middle","opacity":0.8,"horizontalAlign":"center","hfov":10.27,"image":"this.AnimatedImageResource_D4179870_D9E0_DF9F_41E9_43952FD67F8F","vfov":5.19,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_CB312A3C_C551_1BEC_41E4_2B85F5B448AF"},{"areas":["this.HotspotPanoramaOverlayArea_CBA6B1BD_C573_08EF_41DE_5FD2F9EE2459"],"data":{"label":"GoTo03","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"items":[{"hfov":7.58,"verticalAlign":"middle","roll":8.76,"image":"this.AnimatedImageResource_D4165871_D9E0_DF81_41E7_D3EB9D1DCD0C","pitch":-18.39,"distance":100,"yaw":169.66,"class":"HotspotPanoramaOverlayImage","rotationY":-15.37,"rotationX":-13.93,"horizontalAlign":"center","data":{"label":"GoTo03"},"vfov":5.58,"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_CB0E9269_C573_0B94_41B0_3D5FB995C20D"},{"areas":["this.HotspotPanoramaOverlayArea_CB2A75B0_C571_08F5_41E3_05FD8881439A"],"data":{"label":"GoTo05","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"items":[{"distance":100,"yaw":-86.11,"pitch":-25.5,"data":{"label":"GoTo05"},"verticalAlign":"middle","horizontalAlign":"center","hfov":6.8,"image":"this.AnimatedImageResource_D4160871_D9E0_DF81_41D0_C13C350DFADA","vfov":8.27,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_CB4F25AD_C571_08EF_41DE_E72291BC8A00"},{"areas":["this.HotspotPanoramaOverlayArea_CB867469_C571_0F94_41BF_6AFDF75E50D5"],"data":{"label":"GoTo02","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"items":[{"distance":100,"yaw":-109.86,"pitch":-11.35,"data":{"label":"GoTo02"},"verticalAlign":"middle","horizontalAlign":"center","hfov":6.06,"image":"this.AnimatedImageResource_D416D871_D9E0_DF81_41E1_7E57F30E9431","vfov":4.26,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_CB2DAE76_C571_187C_41E7_A1CB8B3F7179"},{"areas":["this.HotspotPanoramaOverlayArea_CB15B26C_C573_086C_41DD_08E450518D95"],"data":{"label":"GoTo04","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"items":[{"distance":100,"yaw":89.34,"pitch":-21.97,"data":{"label":"GoTo04"},"verticalAlign":"middle","horizontalAlign":"center","hfov":6.66,"image":"this.AnimatedImageResource_D4168871_D9E0_DF81_4183_4D8CA8688A84","vfov":5.27,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_CB081268_C573_0B94_41E6_2B536DDBF312"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 3)","id":"HotspotPanoramaOverlayArea_CA28B44B_C571_0FAB_41E3_0840839D8EF0"},{"rowCount":3,"levels":[{"height":300,"width":300,"class":"ImageResourceLevel","url":"media/res_CA38F68E_C571_08AD_41A0_27F55C3D221D_0.png"}],"colCount":3,"frameCount":9,"frameDuration":62,"class":"AnimatedImageResource","id":"AnimatedImageResource_D415C871_D9E0_DF81_41E8_184C2C9E0CEC"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_CBFAE5E0_C54F_0894_41E4_78F79C1EACD6"},{"rowCount":3,"levels":[{"height":270,"width":300,"class":"ImageResourceLevel","url":"media/res_CA3F768D_C571_08AF_41E7_20DEAF92032E_0.png"}],"colCount":3,"frameCount":9,"frameDuration":62,"class":"AnimatedImageResource","id":"AnimatedImageResource_D4173870_D9E0_DF9F_41DE_6C17954EE35A"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_CB3ACE7A_C571_1874_41DC_8F64A8D7EE2D"},{"rowCount":3,"levels":[{"height":270,"width":300,"class":"ImageResourceLevel","url":"media/res_CA3F768D_C571_08AF_41E7_20DEAF92032E_0.png"}],"colCount":3,"frameCount":9,"frameDuration":62,"class":"AnimatedImageResource","id":"AnimatedImageResource_D4170871_D9E0_DF81_41CF_2FCAE7F16F33"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_CB24CA40_C551_1B94_41CD_13887AAA0314"},{"rowCount":3,"levels":[{"height":270,"width":300,"class":"ImageResourceLevel","url":"media/res_CA3F768D_C571_08AF_41E7_20DEAF92032E_0.png"}],"colCount":3,"frameCount":9,"frameDuration":71,"class":"AnimatedImageResource","id":"AnimatedImageResource_D4179870_D9E0_DF9F_41E9_43952FD67F8F"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_CBA6B1BD_C573_08EF_41DE_5FD2F9EE2459"},{"rowCount":3,"levels":[{"height":270,"width":300,"class":"ImageResourceLevel","url":"media/res_CA3F768D_C571_08AF_41E7_20DEAF92032E_0.png"}],"colCount":3,"frameCount":9,"frameDuration":62,"class":"AnimatedImageResource","id":"AnimatedImageResource_D4165871_D9E0_DF81_41E7_D3EB9D1DCD0C"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 4)","id":"HotspotPanoramaOverlayArea_CB2A75B0_C571_08F5_41E3_05FD8881439A"},{"rowCount":3,"levels":[{"height":270,"width":300,"class":"ImageResourceLevel","url":"media/res_CA3F768D_C571_08AF_41E7_20DEAF92032E_0.png"}],"colCount":3,"frameCount":9,"frameDuration":62,"class":"AnimatedImageResource","id":"AnimatedImageResource_D4160871_D9E0_DF81_41D0_C13C350DFADA"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_CB867469_C571_0F94_41BF_6AFDF75E50D5"},{"rowCount":3,"levels":[{"height":270,"width":300,"class":"ImageResourceLevel","url":"media/res_CA3F768D_C571_08AF_41E7_20DEAF92032E_0.png"}],"colCount":3,"frameCount":9,"frameDuration":62,"class":"AnimatedImageResource","id":"AnimatedImageResource_D416D871_D9E0_DF81_41E1_7E57F30E9431"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 3)","id":"HotspotPanoramaOverlayArea_CB15B26C_C573_086C_41DD_08E450518D95"},{"rowCount":3,"levels":[{"height":270,"width":300,"class":"ImageResourceLevel","url":"media/res_CA3F768D_C571_08AF_41E7_20DEAF92032E_0.png"}],"colCount":3,"frameCount":9,"frameDuration":62,"class":"AnimatedImageResource","id":"AnimatedImageResource_D4168871_D9E0_DF81_4183_4D8CA8688A84"}],"paddingRight":0,"scrollBarWidth":10,"borderRadius":0,"backgroundPreloadEnabled":true,"desktopMipmappingEnabled":false,"height":"100%","backgroundColor":["#FFFFFF"],"mediaActivationMode":"window","layout":"absolute","downloadEnabled":false,"vrPolyfillScale":0.75,"scripts":{"setMapLocation":TDV.Tour.Script.setMapLocation,"shareSocial":TDV.Tour.Script.shareSocial,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getComponentByName":TDV.Tour.Script.getComponentByName,"playAudioList":TDV.Tour.Script.playAudioList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaByName":TDV.Tour.Script.getMediaByName,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"initAnalytics":TDV.Tour.Script.initAnalytics,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"unregisterKey":TDV.Tour.Script.unregisterKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"clone":TDV.Tour.Script.clone,"downloadFile":TDV.Tour.Script.downloadFile,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"init":TDV.Tour.Script.init,"getMainViewer":TDV.Tour.Script.getMainViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"openLink":TDV.Tour.Script.openLink,"quizShowScore":TDV.Tour.Script.quizShowScore,"existsKey":TDV.Tour.Script.existsKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizStart":TDV.Tour.Script.quizStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizFinish":TDV.Tour.Script.quizFinish,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPixels":TDV.Tour.Script.getPixels,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"mixObject":TDV.Tour.Script.mixObject,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setValue":TDV.Tour.Script.setValue,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"textToSpeech":TDV.Tour.Script.textToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setLocale":TDV.Tour.Script.setLocale,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showWindow":TDV.Tour.Script.showWindow,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getOverlays":TDV.Tour.Script.getOverlays,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"resumePlayers":TDV.Tour.Script.resumePlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"isPanorama":TDV.Tour.Script.isPanorama,"registerKey":TDV.Tour.Script.registerKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"cloneCamera":TDV.Tour.Script.cloneCamera,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"translate":TDV.Tour.Script.translate,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getKey":TDV.Tour.Script.getKey},"toolTipHorizontalAlign":"center","scrollBarColor":"#000000","gap":10,"borderSize":0,"backgroundColorDirection":"vertical","start":"this.init()","scrollBarMargin":2,"paddingTop":0,"propagateClick":false,"data":{"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"rate":1},"name":"Player475","defaultLocale":"en","locales":{"en":"locale/en.txt"}},"backgroundColorRatios":[0],"scrollBarOpacity":0.5,"minWidth":20,"shadow":false,"minHeight":20,"paddingBottom":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.21.js.map
})();
//Generated with v2022.0.21, Fri Aug 26 2022