// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from 'react';

import {
  Modal,
  Form,
  Radio,
  Input,
  Row,
  Col,
  Typography,
  Progress,
  Tooltip,
  Button,
  Image,
  Icon,
} from '@alilc/antd-lowcode-materials';

import { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';

import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';

import utils, { RefsManager } from '../../utils';

import * as __$$i18n from '../../i18n';

import __$$constants from '../../constants';

import './index.css';

class $$Page extends React.Component {
  _context = this;

  _dataSourceConfig = this._defineDataSourceConfig();
  _dataSourceEngine = __$$createDataSourceEngine(this._dataSourceConfig, this, {
    runtimeConfig: true,
    requestHandlersMap: { fetch: __$$createFetchRequestHandler() },
  });

  get dataSourceMap() {
    return this._dataSourceEngine.dataSourceMap || {};
  }

  reloadDataSource = async () => {
    await this._dataSourceEngine.reloadDataSource();
  };

  get constants() {
    return __$$constants || {};
  }

  constructor(props, context) {
    super(props);

    this.utils = utils;

    this._refsManager = new RefsManager();

    __$$i18n._inject2(this);

    this.state = {
      text: 'outer',
      isShowDialog: false,
      list: [
        {
          id: 1,
          name: '云平台_1',
          type: 'azure',
          createTime: '2022-10-11',
          account: 'admin',
          password: 'admin',
        },
        {
          id: 2,
          name: '云平台_2',
          type: 'aliyun',
          createTime: '2022-10-11',
          account: 'admin',
          password: 'admin',
        },
        {
          id: 3,
          name: '云平台_3',
          type: 'aws',
          createTime: '2022-10-11',
          account: 'admin',
          password: 'admin',
        },
        {
          id: 4,
          name: '云平台_4',
          type: 'aliyun',
          createTime: '2022-10-11',
          account: 'admin',
          password: 'admin',
        },
        {
          id: 5,
          name: '云平台_5',
          type: 'aws',
          createTime: '2022-10-11',
          account: 'admin',
          password: 'admin',
        },
      ],
      platformImg: {
        azure: 'https://s1.ax1x.com/2023/02/15/pS7C8Nq.png',
        aliyun: 'https://s1.ax1x.com/2023/02/15/pS7CFHA.png',
        aws: 'https://s1.ax1x.com/2023/02/15/pS7ClHs.png',
      },
      selectedItem: {
        id: null,
        name: '',
        type: 'azure',
        createTime: '',
        account: '',
        password: '',
      },
      dialogType: 1,
      newId: 4,
      deleteId: '',
      new_visible: '',
      delete_visible: '',
      radio: [
        {
          text: 'azure',
          value: 'azure',
        },
        {
          text: 'aliyun',
          value: 'aliyun',
        },
        {
          text: 'aws',
          value: 'aws',
        },
      ],
    };
  }

  $ = (refName) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName) => {
    return this._refsManager.getAll(refName);
  };

  _defineDataSourceConfig() {
    const _this = this;
    return {
      list: [
        {
          type: 'fetch',
          isInit: function () {
            return true;
          },
          options: function () {
            return {
              params: {},
              method: 'GET',
              isCors: true,
              timeout: 5000,
              headers: {},
              uri: 'mock/info.json',
            };
          },
          id: 'info',
          shouldFetch: function () {
            console.log('should fetch.....');
            return true;
          },
        },
      ],
    };
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  testFunc() {
    console.log('test func');
  }

  onClick() {
    this.setState({
      isShowDialog: true,
    });
  }

  closeDialog() {
    this.setState({
      isShowDialog: false,
    });
  }

  onClick_new(event) {
    // 点击按钮时的回调
    this.setState({
      new_visible: 1,
      dialogType: 1,
    });
  }

  onCancel_new() {
    // 点击遮罩层或右上角叉或取消按钮的回调
    this.setState({
      new_visible: '',
    });
  }

  afterClose() {
    this.setState({
      selectedItem: {
        name: '',
        type: 'azure',
        createTime: '',
        account: '',
        password: '',
      },
    });
  }

  getStatus() {
    return this.state.dialogType === 3 ? 1 : '';
  }

  onOk() {
    // 点击确定回调
    const { dialogType, selectedItem, list } = this.state;

    if (dialogType === 3) {
      this.setState({
        delete_visible: '',
      });
      return;
    }

    const { type, name, password, account } = selectedItem;

    if (type !== '' && name !== '' && password !== '' && account !== '') {
      // 赋值时间
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const dateString = `${year}-${month}-${day}`; // 赋值id

      const newId = Number(new Date()); // console.log('selectedItem', selectedItem);
      // console.log('list', list);
      // 向list塞数据

      this.setState({
        // list: [...list, { ...selectedItem, createTime: dateString, id: newId }],
        list: list.concat({
          ...selectedItem,
          createTime: dateString,
          id: newId,
        }),
      }); // console.log(list, 'list');
      // console.log(this.state.list, 'this.state.list');

      this.setState({
        new_visible: '',
      });
    }
  }

  typeonChange(value) {
    // console.log(value.target.value)
    // this.setState({
    //   selectedItem: { ...this.state.selectedItem, type: value }
    // })
  }

  nameChange(value) {
    // console.log(value)
    // this.setState({
    //   selectedItem: { ...this.state.selectedItem, name: value }
    // })
  }

  accountChange(value) {
    // console.log(value)
    // this.setState({
    //   selectedItem: { ...this.state.selectedItem, account: value }
    // })
  }

  passwordChange(value) {
    // console.log(value)
    // this.setState({
    //   selectedItem: { ...this.state.selectedItem, password: value }
    // })
  }

  onValuesChange(changedValues, allValues) {
    // 字段值更新时触发回调事件
    // console.log('onValuesChange', changedValues, allValues);
    this.setState({
      selectedItem: { ...this.state.selectedItem, ...changedValues },
    });
  }

  onClick_delete(e) {
    console.log(e);
    console.log(this.item, 'item');
    this.setState({
      delete_visible: 1,
    });
  }

  onClick_particulars(e) {
    console.log(e);
    console.log(this.item, 'item');
    this.setState({
      dialogType: 3,
      new_visible: 1,
    });
  }

  onClick_edit(e) {
    console.log(e);
    console.log(this.item, 'item');
    this.setState({
      dialogType: 2,
      new_visible: 1,
    });
  }

  onCancel_delete() {
    // 点击遮罩层或右上角叉或取消按钮的回调
    this.setState({
      delete_visible: '',
    });
  }

  componentDidMount() {
    this._dataSourceEngine.reloadDataSource();

    console.log('did mount');
  }

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <div
        ref={this._refsManager.linkRef('outerView')}
        style={{ height: '100%' }}
      >
        <Modal
          title={__$$eval(
            () =>
              ({
                1: '新建',
                2: '编辑',
                3: '查看',
              }[this.state.dialogType])
          )}
          okText="确认"
          cancelText="取消"
          visible={__$$eval(() => this.state.new_visible)}
          destroyOnClose={true}
          centered={false}
          closable={true}
          confirmLoading={false}
          forceRender={false}
          keyboard={true}
          mask={true}
          maskClosable={true}
          bodyStyle={{}}
          maskStyle={{}}
          okButtonProps={{ disabled: false }}
          __events={{
            eventDataList: [
              {
                type: 'componentEvent',
                name: 'onCancel',
                relatedEventName: 'onCancel_new',
              },
              {
                type: 'componentEvent',
                name: 'afterClose',
                relatedEventName: 'afterClose',
              },
              {
                type: 'componentEvent',
                name: 'onOk',
                relatedEventName: 'onOk',
              },
            ],
            eventList: [
              {
                name: 'afterClose',
                templete:
                  "onCancel(${extParams}){\n// 完全关闭后的回调\nconsole.log('afterClose');}",
                disabled: true,
              },
              {
                name: 'onCancel',
                template:
                  "onCancel(${extParams}){\n// 点击遮罩层或右上角叉或取消按钮的回调\nconsole.log('onCancel');}",
                disabled: true,
              },
              {
                name: 'onOk',
                template:
                  "onOk(${extParams}){\n// 点击确定回调\nconsole.log('onOk');}",
                disabled: true,
              },
            ],
          }}
          onCancel={function () {
            return this.onCancel_new.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
          afterClose={function () {
            return this.afterClose.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
          _unsafe_MixedSetter_title_select="VariableSetter"
          onOk={function () {
            return this.onOk.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
        >
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            onValuesChange={function () {
              return this.onValuesChange.apply(
                this,
                Array.prototype.slice.call(arguments).concat([])
              );
            }.bind(this)}
            name="basic"
            ref={this._refsManager.linkRef('form_exc')}
            colon={true}
            hideRequiredMark={false}
            preserve={true}
            scrollToFirstError={true}
            validateMessages={{ required: "'${name}' 不能为空" }}
            __events={{
              eventDataList: [
                {
                  type: 'componentEvent',
                  name: 'onValuesChange',
                  relatedEventName: 'onValuesChange',
                },
              ],
              eventList: [
                {
                  name: 'onFinish',
                  template:
                    "onFinish(values,${extParams}){\n// 提交表单且数据验证成功后回调事件\nconsole.log('onFinish',values);}",
                  disabled: false,
                },
                {
                  name: 'onFinishFailed',
                  template:
                    "onFinishFailed({values,errorFields,outOfDate},${extParams}){\n// 提交表单且数据验证失败后回调事件\nconsole.log('onFinishFailed',values, errorFields, outOfDate);}",
                  disabled: false,
                },
                {
                  name: 'onFieldsChange',
                  template:
                    "onFieldsChange(changedFields,allFields,${extParams}){\n// 字段更新时触发回调事件\nconsole.log('onFieldsChange',changedFields,allFields);}",
                  disabled: false,
                },
                {
                  name: 'onValuesChange',
                  template:
                    "onValuesChange(changedValues,allValues,${extParams}){\n// 字段值更新时触发回调事件\nconsole.log('onValuesChange',changedValues,allValues);}",
                  disabled: true,
                },
              ],
            }}
          >
            <Form.Item
              label="云平台"
              labelAlign="right"
              colon={true}
              required={true}
              noStyle={false}
              valuePropName="value"
              name="type"
              requiredobj={{ required: true, message: '必填' }}
              typeobj={{ type: '', message: '' }}
              lenobj={{ max: '', min: '', message: '' }}
              patternobj={{ pattern: '', message: '' }}
            >
              <Radio.Group
                options={[
                  { label: 'azure', value: 'azure' },
                  { label: 'aliyun', value: 'aliyun' },
                  { label: 'aws', value: 'aws' },
                ]}
                disabled={__$$eval(() => this.getStatus())}
                size="middle"
                buttonStyle="outline"
                defaultValue={__$$eval(() => this.state.selectedItem.type)}
                __events={{
                  eventDataList: [],
                  eventList: [
                    {
                      name: 'onChange',
                      template:
                        "onChange(event,${extParams}){\n// 选项变化时的回调函数\nconsole.log('onChange',event);}",
                      disabled: true,
                    },
                  ],
                }}
              />
            </Form.Item>
            <Form.Item
              label="账号名称"
              name="name"
              labelAlign="right"
              colon={true}
              required={true}
              noStyle={false}
              valuePropName="value"
              requiredobj={{ required: '', message: '' }}
              typeobj={{ type: '', message: '' }}
              lenobj={{ max: '', min: '', message: '' }}
              patternobj={{ pattern: '', message: '' }}
            >
              <Input
                placeholder="请输入"
                bordered={true}
                disabled={__$$eval(() => this.getStatus())}
                size="middle"
                defaultValue={__$$eval(() => this.state.selectedItem.name)}
                __events={{
                  eventDataList: [],
                  eventList: [
                    {
                      name: 'onChange',
                      template:
                        "onChange(event,${extParams}){\n// 输入框内容变化时的回调\nconsole.log('onChange',event);}",
                      disabled: true,
                    },
                    {
                      name: 'onPressEnter',
                      template:
                        "onPressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log('onPressEnter',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onFocus',
                      template:
                        "onFocus(event,${extParams}){\n// 获取焦点回调\nconsole.log('onFocus',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onKeyDown',
                      template:
                        "onKeyDown(event,${extParams}){\n// 按键按下时的回调\nconsole.log('onKeyDown',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onKeyPress',
                      template:
                        "onKeyPress(event,${extParams}){\n// 按键按下后的回调\nconsole.log('onKeyPress',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onKeyUp',
                      template:
                        "onKeyUp(event,${extParams}){\n// 按键释放回调\nconsole.log('onKeyUp',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onBlur',
                      template:
                        "onBlur(event,${extParams}){\n// 按键释放回调\nconsole.log('onBlur',event);}",
                      disabled: false,
                    },
                  ],
                }}
              />
            </Form.Item>
            <Form.Item
              label="账号"
              labelAlign="right"
              colon={true}
              required={true}
              noStyle={false}
              valuePropName="value"
              requiredobj={{ required: '', message: '' }}
              typeobj={{ type: '', message: '' }}
              lenobj={{ max: '', min: '', message: '' }}
              patternobj={{ pattern: '', message: '' }}
              name="account"
            >
              <Input
                placeholder="请输入"
                bordered={true}
                disabled={__$$eval(() => this.getStatus())}
                defaultValue={__$$eval(() => this.state.selectedItem.account)}
                __events={{
                  eventDataList: [],
                  eventList: [
                    {
                      name: 'onChange',
                      template:
                        "onChange(event,${extParams}){\n// 输入框内容变化时的回调\nconsole.log('onChange',event);}",
                      disabled: true,
                    },
                    {
                      name: 'onPressEnter',
                      template:
                        "onPressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log('onPressEnter',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onFocus',
                      template:
                        "onFocus(event,${extParams}){\n// 获取焦点回调\nconsole.log('onFocus',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onKeyDown',
                      template:
                        "onKeyDown(event,${extParams}){\n// 按键按下时的回调\nconsole.log('onKeyDown',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onKeyPress',
                      template:
                        "onKeyPress(event,${extParams}){\n// 按键按下后的回调\nconsole.log('onKeyPress',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onKeyUp',
                      template:
                        "onKeyUp(event,${extParams}){\n// 按键释放回调\nconsole.log('onKeyUp',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onBlur',
                      template:
                        "onBlur(event,${extParams}){\n// 按键释放回调\nconsole.log('onBlur',event);}",
                      disabled: false,
                    },
                  ],
                }}
              />
            </Form.Item>
            <Form.Item
              label="密码"
              labelAlign="right"
              colon={true}
              required={true}
              noStyle={false}
              valuePropName="value"
              requiredobj={{ required: '', message: '' }}
              typeobj={{ type: '', message: '' }}
              lenobj={{ max: '', min: '', message: '' }}
              patternobj={{ pattern: '', message: '' }}
              name="password"
            >
              <Input
                placeholder="请输入"
                bordered={true}
                disabled={__$$eval(() => this.getStatus())}
                defaultValue={__$$eval(() => this.state.selectedItem.password)}
                __events={{
                  eventDataList: [],
                  eventList: [
                    {
                      name: 'onChange',
                      template:
                        "onChange(event,${extParams}){\n// 输入框内容变化时的回调\nconsole.log('onChange',event);}",
                      disabled: true,
                    },
                    {
                      name: 'onPressEnter',
                      template:
                        "onPressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log('onPressEnter',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onFocus',
                      template:
                        "onFocus(event,${extParams}){\n// 获取焦点回调\nconsole.log('onFocus',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onKeyDown',
                      template:
                        "onKeyDown(event,${extParams}){\n// 按键按下时的回调\nconsole.log('onKeyDown',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onKeyPress',
                      template:
                        "onKeyPress(event,${extParams}){\n// 按键按下后的回调\nconsole.log('onKeyPress',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onKeyUp',
                      template:
                        "onKeyUp(event,${extParams}){\n// 按键释放回调\nconsole.log('onKeyUp',event);}",
                      disabled: false,
                    },
                    {
                      name: 'onBlur',
                      template:
                        "onBlur(event,${extParams}){\n// 按键释放回调\nconsole.log('onBlur',event);}",
                      disabled: false,
                    },
                  ],
                }}
              />
            </Form.Item>
          </Form>
        </Modal>
        <Row
          align="top"
          justify="start"
          wrap={false}
          style={{ height: '5%' }}
          ref={this._refsManager.linkRef('row-7d84bfe2')}
        />
        <Row
          align="top"
          justify="start"
          wrap={false}
          style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
          ref={this._refsManager.linkRef('row-020b55d4')}
        >
          <Col
            span={12}
            order={0}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingLeft: '20px',
            }}
          >
            <Typography.Text
              code={false}
              delete={false}
              disabled={false}
              mark={false}
              keyboard={false}
              underline={false}
              strong={false}
              ref={this._refsManager.linkRef('typography.text-ca7fa20c')}
              style={{ marginRight: '10px', color: '#000000' }}
            >
              {__$$eval(() => `账号数 ${this.state.list.length}/10`)}
            </Typography.Text>
            <Progress
              percent={__$$eval(() => (this.state.list.length / 10) * 100)}
              type="line"
              showInfo={false}
              status="success"
              strokeWidth={0}
              steps={0}
              gapDegree={0}
              gapPosition="top"
              style={{ width: '250px', marginRight: '10px' }}
              ref={this._refsManager.linkRef('progress-1dc17be7')}
            />
            <Tooltip
              title="账号升级请联系管理员"
              defaultVisible={false}
              autoAdjustOverflow={true}
              arrowPointAtCenter={false}
            >
              <Typography.Text
                code={false}
                delete={false}
                disabled={false}
                mark={false}
                keyboard={false}
                underline={false}
                strong={false}
                style={{ color: '#4a90e2' }}
              >
                升级
              </Typography.Text>
            </Tooltip>
          </Col>
          <Col
            span={12}
            order={0}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '20px',
            }}
            ref={this._refsManager.linkRef('col-92245d3d')}
          >
            <Button
              type="primary"
              htmlType="button"
              size="middle"
              shape="default"
              icon=""
              block={false}
              danger={false}
              ghost={false}
              disabled={false}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
              }}
              __events={{
                eventDataList: [
                  {
                    type: 'componentEvent',
                    name: 'onClick',
                    relatedEventName: 'onClick_new',
                  },
                ],
                eventList: [
                  {
                    name: 'onClick',
                    template:
                      "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                    disabled: true,
                  },
                ],
              }}
              onClick={function () {
                return this.onClick_new.apply(
                  this,
                  Array.prototype.slice.call(arguments).concat([])
                );
              }.bind(this)}
            >
              新建
            </Button>
          </Col>
        </Row>
        <Row
          align="top"
          justify="start"
          wrap={false}
          style={{ padding: '0 12px', flexWrap: 'wrap', marginTop: '30px' }}
        >
          {__$$evalArray(() => this.state.list).map((item, index) =>
            ((__$$context) => (
              <Col
                span={8}
                order={0}
                style={{
                  paddingLeft: '15px',
                  paddingRight: '15px',
                  width: '33.33%',
                  marginBottom: '20px',
                }}
                ref={this._refsManager.linkRef('col-4d91f45f')}
                _unsafe_MixedSetter____loop____select="VariableSetter"
              >
                <Row
                  align="top"
                  justify="start"
                  wrap={false}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    padding: '22px',
                    border: '1px solid #000',
                    borderRadius: '15px',
                  }}
                >
                  <Col
                    span={24}
                    order={0}
                    style={{ width: '100%', marginBottom: '20xpx' }}
                  >
                    <Row
                      align="top"
                      justify="start"
                      wrap={false}
                      style={{
                        marginBottom: '20px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      ref={this._refsManager.linkRef('row-7d24f791')}
                    >
                      <Col
                        span={12}
                        order={0}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        ref={this._refsManager.linkRef('col-ca5f9ad3')}
                      >
                        <Typography.Text
                          code={false}
                          delete={false}
                          disabled={false}
                          mark={false}
                          keyboard={false}
                          underline={false}
                          strong={false}
                          style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            color: '#000000',
                          }}
                          ref={this._refsManager.linkRef(
                            'typography.text-c8351d58'
                          )}
                        >
                          {__$$eval(() => item.name)}
                        </Typography.Text>
                      </Col>
                      <Col
                        span={12}
                        order={0}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        ref={this._refsManager.linkRef('col-35fe9708')}
                      >
                        <Image
                          src={__$$eval(
                            () => __$$context.state.platformImg[item.type]
                          )}
                          width={120}
                          alt=""
                          preview={false}
                          fallback=""
                          height={40}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24} order={0} style={{ width: '100%' }}>
                    <Row
                      align="top"
                      justify="start"
                      wrap={false}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Col
                        span={12}
                        order={0}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Typography.Text
                          code={false}
                          delete={false}
                          disabled={false}
                          mark={false}
                          keyboard={false}
                          underline={false}
                          strong={false}
                          style={{ fontSize: '13px', color: '#000000' }}
                        >
                          {__$$eval(() => '创建时间：' + item.createTime)}
                        </Typography.Text>
                      </Col>
                      <Col
                        span={12}
                        order={0}
                        style={{
                          display: 'inline',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}
                      >
                        <Row
                          align="top"
                          justify="start"
                          wrap={false}
                          style={{ display: 'flex' }}
                        >
                          <Col
                            span={8}
                            order={0}
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Icon
                              type="EyeOutlined"
                              size={20}
                              rotate={0}
                              spin={false}
                              __events={{
                                eventDataList: [
                                  {
                                    type: 'componentEvent',
                                    name: 'onClick',
                                    relatedEventName: 'onClick_particulars',
                                  },
                                ],
                                eventList: [
                                  { name: 'onClick', disabled: true },
                                ],
                              }}
                              onClick={function () {
                                return this.onClick_particulars.apply(
                                  this,
                                  Array.prototype.slice
                                    .call(arguments)
                                    .concat([])
                                );
                              }.bind(__$$context)}
                            />
                          </Col>
                          <Col
                            span={8}
                            order={0}
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            ref={this._refsManager.linkRef('col-f1b364bf')}
                          >
                            <Icon
                              type="EditOutlined"
                              size={20}
                              rotate={0}
                              spin={false}
                              ref={this._refsManager.linkRef('icon-37143676')}
                              __events={{
                                eventDataList: [
                                  {
                                    type: 'componentEvent',
                                    name: 'onClick',
                                    relatedEventName: 'onClick_edit',
                                  },
                                ],
                                eventList: [
                                  { name: 'onClick', disabled: true },
                                ],
                              }}
                              onClick={function () {
                                return this.onClick_edit.apply(
                                  this,
                                  Array.prototype.slice
                                    .call(arguments)
                                    .concat([])
                                );
                              }.bind(__$$context)}
                            />
                          </Col>
                          <Col
                            span={8}
                            order={0}
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Icon
                              type="DeleteOutlined"
                              size={20}
                              rotate={0}
                              spin={false}
                              __events={{
                                eventDataList: [
                                  {
                                    type: 'componentEvent',
                                    name: 'onClick',
                                    relatedEventName: 'onClick_delete',
                                  },
                                ],
                                eventList: [
                                  { name: 'onClick', disabled: true },
                                ],
                              }}
                              ref={this._refsManager.linkRef('icon-0f3c0635')}
                              onClick={function () {
                                return this.onClick_delete.apply(
                                  this,
                                  Array.prototype.slice
                                    .call(arguments)
                                    .concat([])
                                );
                              }.bind(__$$context)}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            ))(__$$createChildContext(__$$context, { item, index }))
          )}
        </Row>
        <Modal
          title="删除"
          okText="确认"
          cancelText="取消"
          visible={__$$eval(() => this.state.delete_visible)}
          destroyOnClose={true}
          centered={false}
          closable={true}
          confirmLoading={false}
          forceRender={false}
          keyboard={true}
          mask={true}
          maskClosable={true}
          bodyStyle={{}}
          maskStyle={{}}
          __events={{
            eventDataList: [
              {
                type: 'componentEvent',
                name: 'onCancel',
                relatedEventName: 'onCancel_delete',
              },
            ],
            eventList: [
              {
                name: 'afterClose',
                templete:
                  "onCancel(${extParams}){\n// 完全关闭后的回调\nconsole.log('afterClose');}",
                disabled: false,
              },
              {
                name: 'onCancel',
                template:
                  "onCancel(${extParams}){\n// 点击遮罩层或右上角叉或取消按钮的回调\nconsole.log('onCancel');}",
                disabled: true,
              },
              {
                name: 'onOk',
                template:
                  "onOk(${extParams}){\n// 点击确定回调\nconsole.log('onOk');}",
                disabled: false,
              },
            ],
          }}
          onCancel={function () {
            return this.onCancel_delete.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
        >
          <Typography.Text
            code={false}
            delete={false}
            disabled={false}
            mark={false}
            keyboard={false}
            underline={false}
            strong={false}
            style={{ fontSize: '20px', fontWeight: 700 }}
          >
            是否确认删除
          </Typography.Text>
        </Modal>
      </div>
    );
  }
}

export default $$Page;

function __$$eval(expr) {
  try {
    return expr();
  } catch (error) {}
}

function __$$evalArray(expr) {
  const res = __$$eval(expr);
  return Array.isArray(res) ? res : [];
}

function __$$createChildContext(oldContext, ext) {
  const childContext = {
    ...oldContext,
    ...ext,
  };
  childContext.__proto__ = oldContext;
  return childContext;
}
