const LibraryCreator = {
	start: (blocksJSON, category, text) => {
		let blockArray = new Array;
		// LibraryCreator 가져오기
		Entry.staticBlocks = [
			{
				category: 'start',
				blocks: [
					'when_run_button_click',
					'when_some_key_pressed',
					'mouse_clicked',
					'mouse_click_cancled',
					'when_object_click',
					'when_object_click_canceled',
					'when_message_cast',
					'message_cast',
					'message_cast_wait',
					'when_scene_start',
					'start_scene',
					'start_neighbor_scene',
					'check_object_property',
					'check_block_execution',
					'switch_scope',
					'is_answer_submited',
					'check_lecture_goal',
					'check_variable_by_name',
					'show_prompt',
					'check_goal_success',
					'positive_number',
					'negative_number',
					'wildcard_string',
					'wildcard_boolean',
					'register_score',
				],
			},
			{
				category: 'flow',
				blocks: [
					'wait_second',
					'repeat_basic',
					'repeat_inf',
					'repeat_while_true',
					'stop_repeat',
					'_if',
					'if_else',
					'wait_until_true',
					'stop_object',
					'restart_project',
					'when_clone_start',
					'create_clone',
					'delete_clone',
					'remove_all_clones',
				],
			},
			{
				category: 'moving',
				blocks: [
					'move_direction',
					'bounce_wall',
					'move_x',
					'move_y',
					'move_xy_time',
					'locate_x',
					'locate_y',
					'locate_xy',
					'locate_xy_time',
					'locate',
					'locate_object_time',
					'rotate_relative',
					'direction_relative',
					'rotate_by_time',
					'direction_relative_duration',
					'rotate_absolute',
					'direction_absolute',
					'see_angle_object',
					'move_to_angle',
				],
			},
			{
				category: 'looks',
				blocks: [
					'show',
					'hide',
					'dialog_time',
					'dialog',
					'remove_dialog',
					'change_to_some_shape',
					'change_to_next_shape',
					'add_effect_amount',
					'change_effect_amount',
					'erase_all_effects',
					'change_scale_size',
					'set_scale_size',
					'flip_x',
					'flip_y',
					'change_object_index',
				],
			},
			{
				category: 'brush',
				blocks: [
					'brush_stamp',
					'start_drawing',
					'stop_drawing',
					'set_color',
					'set_random_color',
					'change_thickness',
					'set_thickness',
					'change_brush_transparency',
					'set_brush_tranparency',
					'brush_erase_all',
				],
			},
			{
				category: 'text',
				blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
			},
			{
				category: 'sound',
				blocks: [
					'sound_something_with_block',
					'sound_something_second_with_block',
					'sound_from_to',
					'sound_something_wait_with_block',
					'sound_something_second_wait_with_block',
					'sound_from_to_and_wait',
					'sound_volume_change',
					'sound_volume_set',
					'sound_silent_all',
				],
			},
			{
				category: 'judgement',
				blocks: [
					'is_clicked',
					'is_press_some_key',
					'reach_something',
					'boolean_basic_operator',
					'boolean_and_or',
					'boolean_not',
				],
			},
			{
				category: 'calc',
				blocks: [
					'calc_basic',
					'calc_rand',
					'coordinate_mouse',
					'coordinate_object',
					'get_sound_volume',
					'quotient_and_mod',
					'calc_operation',
					'get_project_timer_value',
					'choose_project_timer_action',
					'set_visible_project_timer',
					'get_date',
					'distance_something',
					'get_sound_duration',
					'get_user_name',
					'length_of_string',
					'combine_something',
					'char_at',
					'substring',
					'index_of_string',
					'replace_string',
					'change_string_case',
				],
			},
			{
				category: 'variable',
				blocks: [
					'variableAddButton',
					'listAddButton',
					'ask_and_wait',
					'get_canvas_input_value',
					'set_visible_answer',
					'get_variable',
					'change_variable',
					'set_variable',
					'show_variable',
					'hide_variable',
					'value_of_index_from_list',
					'add_value_to_list',
					'remove_value_from_list',
					'insert_value_to_list',
					'change_value_list_index',
					'length_of_list',
					'is_included_in_list',
					'show_list',
					'hide_list',
				],
			},
			{
				category: 'func',
				blocks: ['functionAddButton'],
			},
			{
				category: 'analysis',
				blocks: [
					'analizyDataAddButton',
					'append_row_to_table',
					'insert_row_to_table',
					'delete_row_from_table',
					'set_value_from_table',
					'get_table_count',
					'get_value_from_table',
					'calc_values_from_table',
					'open_table_chart',
					'close_table_chart',
				],
			},
			{
				category: 'ai_utilize',
				blocks: [
					'aiUtilizeBlockAddButton',
					'aiUtilizeModelTrainButton',
					'audio_title',
					'check_microphone',
					'speech_to_text_convert',
					'speech_to_text_get_value',
					'get_microphone_volume',
					'tts_title',
					'read_text',
					'read_text_wait_with_block',
					'set_tts_property',
					'translate_title',
					'get_translated_string',
					'check_language',
					'video_title',
					'video_draw_webcam',
					'video_check_webcam',
					'video_flip_camera',
					'video_set_camera_opacity_option',
					'video_motion_value',
					'video_toggle_model',
					'video_is_model_loaded',
					'video_number_detect',
					'video_toggle_ind',
					'video_body_part_coord',
					'video_face_part_coord',
					'video_detected_face_info',
				],
			},
			{
				category: 'expansion',
				blocks: [
					'expansionBlockAddButton',
					'weather_title',
					'check_weather',
					'check_finedust',
					'get_weather_data',
					'get_current_weather_data',
					'get_today_temperature',
					'check_city_weather',
					'check_city_finedust',
					'get_city_weather_data',
					'get_current_city_weather_data',
					'get_today_city_temperature',
					'festival_title',
					'count_festival',
					'get_festival_info',
					'behaviorConductDisaster_title',
					'count_disaster_behavior',
					'get_disaster_behavior',
					'behaviorConductLifeSafety_title',
					'count_lifeSafety_behavior',
					'get_lifeSafety_behavior',
				],
			},
			{
				category: 'arduino',
				blocks: [
					'arduino_reconnect',
					'arduino_open',
					'arduino_cloud_pc_open',
					'arduino_connect',
					'arduino_download_connector',
					'download_guide',
					'arduino_download_source',
					'arduino_noti',
				].concat(EntryStatic.DynamicHardwareBlocks),
			}
		];
		EntryStatic.getAllBlocks = () => {
			return Entry.staticBlocks;
		}
		function updateCategory(category, options) {
			Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
				{ category: 'start', visible: true },
				{ category: 'flow', visible: true },
				{ category: 'moving', visible: true },
				{ category: 'looks', visible: true },
				{ category: 'brush', visible: true },
				{ category: 'text', visible: true },
				{ category: 'sound', visible: true },
				{ category: 'judgement', visible: true },
				{ category: 'calc', visible: true },
				{ category: 'variable', visible: true },
				{ category: 'func', visible: true },
				{ category: 'analysis', visible: true },
				{ category: 'ai_utilize', visible: true },
				{ category: 'expansion', visible: true },
				{ category: category, visible: true },
				{ category: 'arduino', visible: true }
			]);
			for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
				if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == "entryCategorytext")) {
					$($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
				}
			}
			Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
			Entry.playground.blockMenu._generateCategoryCode(category);
			if (options) {
				if (options.background) {
					$(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
					$(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
					if (options.backgroundSize) {
						$(`#entryCategory${category}`).css('background-size', options.backgroundSize + "px");
					}
				}
				if (options.name) {
					$(`#entryCategory${category}`)[0].innerText = options.name;
				}
			}
		}
		function addBlock(blockname, template, color, params, _class, func, skeleton = 'basic') {
			Entry.block[blockname] = {
				color: color.color,
				fontColor: color.font,
				outerLine: color.outline,
				skeleton: skeleton,
				statement: [],
				params: params.params,
				events: {},
				def: {
					params: params.define,
					type: blockname
				},
				paramsKeyMap: params.map,
				class: _class ? _class : 'default',
				func: func,
				template: template
			}
		}
		// 블록 추가하기
		for (let i in blocksJSON) {
			let block = blocksJSON[i];
			blockArray.push(block.name);
			addBlock(block.name, block.template, { color: block.color.default, outerLine: block.color.darken }, { params: block.params, define: block.def, map: block.map }, block.class, block.func, block.skeleton);
		}
		// 블록 반영
		Entry.staticBlocks.push({ category: category, blocks: blockArray });
		// 카테고리 업데이트 (ws에서만)
		if (typeof useWebGL == "undefined") {
			updateCategory(category);
			// 아이콘 적용
			$('head').append(`<style>#entryCategory${category}{background-image:url(https://raw.githack.com/entry62045/entryjs/main/images/icon.svg);background-repeat:no-repeat;margin-bottom:1px;background-position-y: 10px;background-size: 20px;}.entrySelectedCategory#entryCategory${category}{background-image:url(https://raw.githack.com/entry62045/entryjs/main/images/icon_selected.svg);background-color:#FA6F23;border-color:##FA6F23;color:#fff}</style>`);
			// 카테고리 이름 적용;
			$(`#entryCategory${category}`).append(text);
		}
	}
}
// 클립보드 복사 함수
function copy(val) {
	var dummy = document.createElement("textarea");
	document.body.appendChild(dummy);
	dummy.value = val;
	dummy.select();
	try {
		document.execCommand("copy");
	}
	catch {
		alert('복사하기를 지원하지 않습니다.');
	}
	finally {
		document.body.removeChild(dummy);
	}
}
const blocks = [
	{
		name: 'Expressblock_webblocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Web',
				color: EntryStatic.colorSet.common.TEXT,
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'Expressblock_OpenUrl',
		template: '%1 사이트 열기(일반)%2',
		skeleton: 'basic',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['https://playentry.org']
			},
			null
		],
		map: {
			WEBSITE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			open(script.getValue('WEBSITE', script));
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_OpenUrlSafeMode',
		template: '%1 사이트 열기(안전모드)%2',
		skeleton: 'basic',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['https://playentry.org']
			},
			null
		],
		map: {
			WEBSITESAFEMODE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			if (confirm(script.getValue('WEBSITESAFEMODE', script) + ' 사이트를 열려 합니다. 여시겠습니까?')) {
				open(script.getValue('WEBSITESAFEMODE', script));
			}
			else {
				alert('사용자가 취소를 클릭하여 열기가 취소되었습니다.');
			}
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_SetPageTitle',
		template: '페이지 제목을 %1로 바꾸기%2',
		skeleton: 'basic',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['엔트리']
			},
			null
		],
		map: {
			PAGETITLE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			document.title = script.getValue('PAGETITLE', script);
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_GetPageTitle',
		template: '페이지 제목',
		skeleton: 'basic_string_field',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [],
		def: [],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			let pagetitle = document.title;
			return pagetitle;
		},
	},
	{
		name: 'Expressblock_OpenUserPage',
		template: '%1 유저의 마이페이지 열기%2',
		skeleton: 'basic',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['entry62045']
			},
			null
		],
		map: {
			USERNAME: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			open('https://playentry.org/' + script.getValue('USERNAME', script));
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_Getminute2',
		template: '현재 2자리 분',
		skeleton: 'basic_string_field',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [],
		def: [],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			let today1 = new Date();
			let minutes = today1.getMinutes();
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
			return minutes;
		},
	},
	{
		name: 'Expressblock_Getsecond2',
		template: '현재 2자리 초',
		skeleton: 'basic_string_field',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [],
		def: [],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			let today2 = new Date();
			let seconds = today2.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			return seconds;
		},
	},
	{
		name: 'Expressblock_JsonBlocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Json',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'Expressblock_Get',
		template: '%1 가져오기 (GET)',
		skeleton: 'basic_string_field',
		color: {
			default: '#383838',
			darken: '#383838'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: ['https://playentry.org/api/discuss/findNotice']
			}
		],
		map: {
			APIURL: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			let res = await fetch(script.getValue('APIURL', script));
			let data = await res.json();
			return data;
		},
	},
	{
		name: 'Expressblock_JsonKey',
		template: 'JSON %1 의 %2 항목',
		skeleton: 'basic_string_field',
		color: {
			default: '#383838',
			darken: '#383838'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: [`{ "title": "Hello, world!" }`]
			},
			{
				type: 'text',
				params: ['title']
			}
		],
		map: {
			JSON: 0,
			KEY: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			let json = eval(script.getValue('JSON', script));
			let done = json[script.getValue('KEY', script)];
			return done;
		},
	},
	{
		name: 'Expressblock_FindUserBlocked',
		template: '%1 유저는 영구정지되었는가?',
		skeleton: 'basic_boolean_field',
		color: {
			default: '#383838',
			darken: '#383838'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: ['62045']
			}
		],
		map: {
			USERBLOCKEDNAME: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			let blockedres = await fetch('https://playentry.org/api/getUserByusername/' + script.getValue('USERBLOCKEDNAME', script));
			let blockeddata = await blockedres.json();
			let blockedjson = eval(blockeddata);
			let blockeddone = blockedjson['isBlocked'];
			return blockeddone;
		},
	},
	{
		name: 'Expressblock_FindUserBlockedVar',
		template: '%1 유저는 영구정지되었는가?',
		skeleton: 'basic_string_field',
		color: {
			default: '#383838',
			darken: '#383838'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: ['entry62045']
			}
		],
		map: {
			USERBLOCKEDNAMEVAR: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			let blockedres = await fetch('https://playentry.org/api/getUserByusername/' + script.getValue('USERBLOCKEDNAMEVAR', script));
			let blockeddata = await blockedres.json();
			let blockedjson = eval(blockeddata);
			let blockeddone = blockedjson['isBlocked'];
			return blockeddone;
		},
	},
	{
		name: 'Expressblock_FindUserDes',
		template: '%1 유저의 설명',
		skeleton: 'basic_string_field',
		color: {
			default: '#383838',
			darken: '#383838'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: ['entry62045']
			}
		],
		map: {
			USERDESNAME: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			let desres = await fetch('https://playentry.org/api/getUserByusername/' + script.getValue('USERDESNAME', script));
			let desdata = await desres.json();
			let desjson = eval(desdata);
			let desdone = desjson['description'];
			return desdone;
		},
	},
	{
		name: 'Expressblock_FindUserRole',
		template: '%1 유저의 역할',
		skeleton: 'basic_string_field',
		color: {
			default: '#383838',
			darken: '#383838'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: ['entry62045']
			}
		],
		map: {
			USERROLENAME: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			let roleres = await fetch('https://playentry.org/api/getUserByusername/' + script.getValue('USERROLENAME', script));
			let roledata = await roleres.json();
			let rolejson = eval(roledata);
			let roledone = rolejson['role'];
			return roledone;
		},
	},
	{
		name: 'Expressblock_FindUserGroup',
		template: '%1 유저의 기본 학급',
		skeleton: 'basic_string_field',
		color: {
			default: '#383838',
			darken: '#383838'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: ['entry62045']
			}
		],
		map: {
			USERGROUPNAME: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			let groupres = await fetch('https://playentry.org/api/getUserByusername/' + script.getValue('USERGROUPNAME', script));
			let groupdata = await groupres.json();
			let groupjson = eval(groupdata);
			let groupdone = groupjson['primaryGroup'];
			return groupdone;
		},
	},
	{
		name: 'Expressblock_Post',
		template: '%1에 %2 POST 요청 보내기%3',
		skeleton: 'basic',
		color: {
			default: '#383838',
			darken: '#383838'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['https://playentry.org/api/discuss']
			},
			{
				type: 'text',
				params: ['{ "images": [], "category": "free", "title": "제목", "content": "내용", "groupNotice": false }']
			},
			null
		],
		map: {
			APIURL: 0,
			DATA: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			let res = await fetch(script.getValue('APIURL', script), {
				method: 'POST',
				body: script.getValue('DATA', script),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_SaveProject',
		template: '이 작품 저장하기%1',
		skeleton: 'basic',
		color: {
			default: '#383838',
			darken: '#383838'
		},
		params: [
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			null
		],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			if (Entry.projectId != "underfinded") {
				await fetch(script.getValue('APIURL', script), {
					method: 'PUT',
					body: '{ "isOpen": true }',
					headers: {
						'Content-Type': 'application/json'
					}
				});
			}
			else {
				alert('작품이 저장되지 않은 상태입니다.');
			}
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_SearchBlocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Search',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'Expressblock_SearchGoogle',
		template: '%1 내용을 구글에 검색하기%2',
		skeleton: 'basic',
		color: {
			default: '#33aa5f',
			darken: '#33aa5f'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['엔트리']
			},
			null
		],
		map: {
			SEARCHRESULT: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			open('https://google.com/search?q=' + script.getValue('SEARCHRESULT', script));
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_SearchEntryCommunityFree',
		template: '%1 내용을 엔트리 커뮤니티 엔트리 이야기에 검색하기%2',
		skeleton: 'basic',
		color: {
			default: '#33aa5f',
			darken: '#33aa5f'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['엔트리']
			},
			null
		],
		map: {
			SEARCHRESULT1: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			open('https://playentry.org/ds#!/free?title=' + script.getValue('SEARCHRESULT1', script) + '&search_title=' + script.getValue('SEARCHRESULT1', script) + '&sort=created&rows=20&page=1');
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_SearchEntryCommunityTips',
		template: '%1 내용을 엔트리 커뮤니티 노하우&팁에 검색하기%2',
		skeleton: 'basic',
		color: {
			default: '#33aa5f',
			darken: '#33aa5f'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['엔트리']
			},
			null
		],
		map: {
			SEARCHRESULT2: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			open('https://playentry.org/ds#!/tips?title=' + script.getValue('SEARCHRESULT2', script) + '&search_title=' + script.getValue('SEARCHRESULT2', script) + '&sort=created&rows=20&page=1');
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_SearchEntryCommunityQna',
		template: '%1 내용을 엔트리 커뮤니티 묻고답하기에 검색하기%2',
		skeleton: 'basic',
		color: {
			default: '#33aa5f',
			darken: '#33aa5f'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['엔트리']
			},
			null
		],
		map: {
			SEARCHRESULT3: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			open('https://playentry.org/ds#!/qna?title=' + script.getValue('SEARCHRESULT3', script) + '&search_title=' + script.getValue('SEARCHRESULT3', script) + '&sort=created&rows=20&page=1');
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_ConsoleBlocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Console',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'Expressblock_Console',
		template: '%1 내용을 브라우저 콘솔에 %2 하기%3',
		skeleton: 'basic',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Dropdown',
				options: [
					['로그', 'log'],
					['경고', 'warn'],
					['오류', 'error'],
					['알림', 'info']
				],
				fontSize: 11,
				arrowColor: '#f78640',
				value: 'log'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`엔트리`]
			},
			null,
			null
		],
		map: {
			CONTENT: 0,
			TYPE: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			console[script.getValue('TYPE', script)](script.getValue('CONTENT', script));
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_ConsoleClear',
		template: '브라우저 콘솔 모두 지우기%1',
		skeleton: 'basic',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			null
		],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			console.clear();
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_StartJS',
		template: '%1 코드를 실행하기%2',
		skeleton: 'basic',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`console.log('콘솔 출력');`]
			},
			null
		],
		map: {
			STARTJSCODE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			try {
				eval(script.getValue('STARTJSCODE', script));
			}
			catch (err) {
				alert('다음 오류가 발생하여 실행에 실패하였습니다. 내용: ' + err);
			}
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_JSalert',
		template: '%1 내용의 alert 창 띄우기%2',
		skeleton: 'basic',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`Javascript alert() 함수입니다.`]
			},
			null
		],
		map: {
			MESSAGEVALUE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			alert(script.getValue('MESSAGEVALUE', script));
		},
	},
	{
		name: 'Expressblock_JSprompt',
		template: '%1 내용의 prompt 창 띄우기',
		skeleton: 'basic_string_field',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: [`내용을 입력하세요.`]
			}
		],
		map: {
			PROMPTVALUE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			let promptvalue = prompt(script.getValue('PROMPTVALUE', script));
			return promptvalue;
		},
	},
	{
		name: 'Expressblock_JSconfirm',
		template: '%1 내용의 confirm 창에서 확인을 눌렀는가?',
		skeleton: 'basic_string_field',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: [`확인과 취소 중에서 선택하세요.`]
			}
		],
		map: {
			CONFIRMVALUE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			let confirmvalue = confirm(script.getValue('CONFIRMVALUE', script));
			return confirmvalue;
		},
	},
	{
		name: 'Expressblock_BoostModeBlocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Boost Mode',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'Expressblock_BoostMode',
		template: '부스트 모드가 켜져 있는가?',
		skeleton: 'basic_boolean_field',
		color: {
			default: '#850bb5',
			darken: '#850bb5'
		},
		params: [],
		def: [],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			(typeof useWebGL == 'undefined') ? false : useWebGL == true ? true : false;
		},
	},
	{
		name: 'Expressblock_ValueBlocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Value',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'Expressblock_ChangeVar',
		template: '변수 %1 값을 %2 으로 변경%3',
		skeleton: 'basic',
		color: {
			default: '#1dbfa1',
			darken: '#1dbfa1'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`user.username`]
			},
			{
				type: 'text',
				params: ['entry']
			},
			null
		],
		map: {
			VARNAME: 0,
			VALUE: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			eval(`${script.getValue('VARNAME', script)} = '${script.getValue('VALUE', script)}'`);
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_BlockFindChange',
		template: '블럭 감지 활성화(비공식로딩 변수 값을 1로 변경)%1',
		skeleton: 'basic',
		color: {
			default: '#1dbfa1',
			darken: '#1dbfa1'
		},
		params: [
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			null
		],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			Entry.variableContainer.getVariableByName('비공식로딩').value_ = 1;
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_CopytoClipboard',
		template: '%1 내용을 클립보드에 복사하기%2',
		skeleton: 'basic',
		color: {
			default: '#00b6b1',
			darken: '#00b6b1'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['엔트리']
			},
			null
		],
		map: {
			TEXTTOCOPY: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			copy(script.getValue('TEXTTOCOPY', script));
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_GetBrowser',
		template: '브라우저 이름',
		skeleton: 'basic_string_field',
		color: {
			default: '#00b6b1',
			darken: '#00b6b1'
		},
		params: [],
		def: [],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			return Entry.userAgent
		},
	},
	{
		name: 'Expressblock_DangerBlocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Danger',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'Expressblock_LoopAlert',
		template: 'alert 함수 무한반복하기%1',
		skeleton: 'basic',
		color: {
			default: '#FF0000',
			darken: '#FF0000'
		},
		params: [
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			null
		],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			while (true) {
				alert('당신은 이 사이트에 갇혔습니다.');
			}
		},
	},
	{
		name: 'Expressblock_DeleteAllMyProject',
		template: '자신의 모든 작품 삭제%1',
		skeleton: 'basic',
		color: {
			default: '#FF0000',
			darken: '#FF0000'
		},
		params: [
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			null
		],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			$.get(`https://playentry.org/api/project/find?user=${user._id}`, get => { get.data.forEach(project => { fetch(`https://playentry.org/api/project/${project._id}`, { method: 'DELETE' }) }) });
			alert('자신의 모든 작품이 삭제되었습니다.');
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_DeleteAllMyFreeDiscuss',
		template: '자신의 모든 엔트리 이야기 글 삭제%1',
		skeleton: 'basic',
		color: {
			default: '#FF0000',
			darken: '#FF0000'
		},
		params: [
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			null
		],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			$.get(`https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=free`, d => d.data.forEach(({ _id }) => $.ajax({ url: "https://playentry.org/api/discuss/" + _id, type: "DELETE" })));
			alert('자신의 모든 엔트리 이야기 글이 삭제되었습니다.');
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_DeleteAllMyTipDiscuss',
		template: '자신의 모든 노하우&팁 글 삭제%1',
		skeleton: 'basic',
		color: {
			default: '#FF0000',
			darken: '#FF0000'
		},
		params: [
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			null
		],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			$.get(`https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=tips`, d => d.data.forEach(({ _id }) => $.ajax({ url: "https://playentry.org/api/discuss/" + _id, type: "DELETE" })));
			alert('자신의 모든 노하우&팁 글이 삭제되었습니다.');
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_DeleteAll',
		template: '초심으로 돌아가기%1',
		skeleton: 'basic',
		color: {
			default: '#FF0000',
			darken: '#FF0000'
		},
		params: [
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			null
		],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			$.get(`https://playentry.org/api/project/find?user=${user._id}`, get => { get.data.forEach(project => { fetch(`https://playentry.org/api/project/${project._id}`, { method: 'DELETE' }) }) });
			$.get(`https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=free`, d => d.data.forEach(({ _id }) => $.ajax({ url: "https://playentry.org/api/discuss/" + _id, type: "DELETE" })));
			$.get(`https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=tips`, d => d.data.forEach(({ _id }) => $.ajax({ url: "https://playentry.org/api/discuss/" + _id, type: "DELETE" })));
			$.get(`https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=qna`, d => d.data.forEach(({ _id }) => $.ajax({ url: "https://playentry.org/api/discuss/" + _id, type: "DELETE" })));
			alert('자신의 모든 작품, 엔트리 이야기 글, 노하우&팁 글, 묻고답하기 글이 삭제되었습니다.');
			return script.callReturn();
		},
	},
	{
		name: 'Expressblock_Copy',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Made by 62045, using EntBlocks',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	}
]
LibraryCreator.start(blocks, 'API', '특급');

async function ExpressBlockLoad() {
	if(Entry.getMainWS() && Entry.projectId) {
		const TempProjectId = Entry.projectId;
		const ExportedProject = Entry.exportProject();
		const ProjectData = await (await fetch(`https://playentry.org/api/project/${Entry.projectId}`)).json();
		Entry.clearProject();
		Entry.loadProject(Object.keys(ExportedProject).reduce((acc, cur) => {
			acc[cur] = ProjectData[cur];
			return acc;
		}, {}));
		Entry.projectId = TempProjectId;
	}
}
ExpressBlockLoad();
console.log('%cExpress Block 4.2%c\n\n62045의 특급 블럭을 사용해주셔서 감사합니다.\n이 블럭은 tica_님의 EntBlocks 2.2를 사용하여 제작하였습니다.\nhttps://github.com/thoratica/entblocks\n\n%c엔트리: https://playentry.org/entry62045\nGitHub: https://github.com/entry62045\n특급 블럭: https://github.com/entry62045/expressblock', 'font-family: 맑은 고딕; color: #ffffff; background-color: #66AA33; border-radius: 10px; font-size: 26px; padding : 20px 30px', 'color: #000000; background-color: #FFFFFF; font-size: 18px;', 'color: #000000; background-color: #FFFFFF; font-size: 16px;');
