class aosCustomScroll {
	constructor(props) {
		this.offset = 100;
		this.aosElems = props.elems;
		this.aosElemOffsets = [];
		this.disableWidth = 1024;
	}

	getOffsets() {
		for (let i = 0; i < this.aosElems.length; i++) {
			const el = this.aosElems[i];
			this.aosElemOffsets.push(el.offsetTop - window.innerHeight + this.offset);
		}
	}

	scrollEvent(scrollTop) {
		for (let i = 0; i < this.aosElems.length; i++) {
			let el = this.aosElems[i];
			let scrollOffset = scrollTop === undefined ? 0 : scrollTop;

			if (this.aosElemOffsets[i] < scrollOffset) {
				el.style.opacity = 1;
			}
		}
	}

	init() {
		this.getOffsets();
		this.scrollEvent();
	}
}

// use
const customScroll = new aosCustomScroll({
	elems: this.itemsContainer.current.querySelectorAll('.skill-item'),
});

customScroll.init();
window.addEventListener('scroll', e => {
	customScroll.scrollEvent(document.querySelector('html').scrollTop);
});
