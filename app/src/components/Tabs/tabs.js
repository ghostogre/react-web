import React, { Component, PropTypes, cloneElement } from 'react';
import TabNav from './tabNav.js';
import TabContent from './tabContent.js';
import classnames from 'classnames';
import style from './tabs.scss';

class Tabs extends Component {
  static propTypes = {
    // 增加可选 class
    className: PropTypes.string,
    // 前缀
    classPrefix: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    // 默认激活索引，组件内更新
    defaultActiveIndex: PropTypes.number,
    // 默认激活索引，组件外更新
    activeIndex: PropTypes.number,
    // 切换回调函数
    onChange: PropTypes.func
  }
  static defaultProps = {
    classPrefix: 'tabs',
    onChange: () => {}
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleTabClick(activeIndex) {
    const prevIndex = this.state.activeIndex;
    if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
      this.setState({
        activeIndex,
        prevIndex
      });

      this.props.onChange({ activeIndex, prevIndex });
    }
  }

  renderTabNav() {
    const { classPrefix, children } = this.props;

    return (
      <TabNav
        key="tabBar"
        classPrefix={classPrefix}
        onTabClick={this.handleTabClick}
        panels={children}
        activeIndex={this.state.activeIndex}
      />
    )
  }

  renderTabContent() {
    const { classPrefix, children } = this.props;

    return (
      <TabContent
        key="tabcontent"
        classPrefix={classPrefix}
        panels={children}
        activeIndex={this.state.activeIndex}
      />
    );
  }

  componentWillMount() {
    // 挂载之前
  }
  componentDidMount() {
    // 渲染之后
  }
  componentWillUnmount() {
    // 卸载组件
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 进行正确的渲染
  }
  componentWillReceiveProps(nextProps) {
    // 如果是父组件更新props而更新的
    // setState不会二次渲染
    if ('activeIndex' in nextProps) {
      this.setState({
        activeIndex: nextProps.activeIndex
      })
    }
  }
  componentWillUpdate(nextProps, nextState) {
    // 更新的渲染前
    // 不能执行setState
  }
  componentDidUpdate(prevProps, prevState) {
    // 更新的渲染后
  }
  render() {
    const { className } = this.props;
    // 用于合并class
    const classes = classnames(className, 'ui-tabs');
    return (
      <div className={classes}>
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    );
  }
}

export default Tabs;
