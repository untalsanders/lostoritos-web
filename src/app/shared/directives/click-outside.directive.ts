import { AfterViewInit, Directive, DOCUMENT, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core'
import { filter, fromEvent, Subscription } from 'rxjs'

@Directive({
  selector: '[clickOutside]',
  standalone: true,
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter<void>()

  documentClickSubscription: Subscription | undefined

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnDestroy(): void {
    this.documentClickSubscription = fromEvent(this.document, 'click').pipe(
      filter(event => !this.isInside(event?.target as HTMLElement)),
    ).subscribe(() => this.clickOutside.emit())
  }

  ngAfterViewInit(): void {
    this.documentClickSubscription?.unsubscribe()
  }

  isInside(elementToCheck: HTMLElement): boolean {
    return elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck)
  }
}
